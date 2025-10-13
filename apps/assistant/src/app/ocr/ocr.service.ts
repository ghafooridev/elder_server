import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JobStatus } from '@prisma-clients/assistant';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import * as Tesseract from 'tesseract.js';
import nspell from 'nspell';

// 🧠 Known test aliases for normalization
const LAB_TEST_ALIASES: Record<string, string> = {
  'fasting blood glucose': 'Glucose (Fasting)',
  fbs: 'Glucose (Fasting)',
  'blood sugar': 'Glucose (Fasting)',
  hba1c: 'HbA1c',
  urea: 'Urea',
  creatinine: 'Creatinine',
  'total cholesterol': 'Total Cholesterol',
  triglycerides: 'Triglycerides',
  'hdl cholesterol': 'HDL Cholesterol',
  'ldl cholesterol': 'LDL Cholesterol',
  sgot: 'AST (SGOT)',
  sgpt: 'ALT (SGPT)',
  got: 'AST (SGOT)',
  gpt: 'ALT (SGPT)',
};

@Injectable()
export class OcrService {
  private spell: nspell | null = null;

  constructor(private readonly prisma: PrismaService) {
    this.loadDictionary();
  }

  private async loadDictionary() {
    try {
      const dictionaryModule = await import('dictionary-en');
      const dictionary = dictionaryModule.default || dictionaryModule;

      const dict = await new Promise<any>((resolve, reject) =>
        (dictionary as any)((err: any, result: any) =>
          err ? reject(err) : resolve(result)
        )
      );

      this.spell = nspell(dict);
      console.log('✅ Spell-check dictionary loaded');
    } catch (err) {
      console.error('⚠️ Spell-check dictionary init failed:', err);
    }
  }

  async getOcrResultByDocument(documentId: string) {
    const ocr = await this.prisma.ocrResult.findUnique({
      where: { documentId },
    });
    if (!ocr)
      throw new NotFoundException('OCR result not found for this document');
    return ocr;
  }

  async getOcrResultById(ocrId: string) {
    const ocr = await this.prisma.ocrResult.findUnique({
      where: { id: ocrId },
    });
    if (!ocr) throw new NotFoundException('OCR result not found');
    return ocr;
  }

  // 🧹 Clean noisy OCR text
  private cleanText(raw: string): string {
    return raw
      .replace(/[^\w\s.,:;!?()/\-+%°]/g, '') // remove weird symbols
      .replace(/\s{2,}/g, ' ') // collapse extra spaces
      .replace(/\n\s*\n/g, '\n') // normalize empty lines
      .trim();
  }

  // ✍️ Spell correct using nspell
  private spellCorrect(text: string): string {
    if (!this.spell) return text;
    return text
      .split(/\s+/)
      .map((word) => {
        if (this.spell?.correct(word)) return word;
        const suggestions = this.spell?.suggest(word);
        return suggestions && suggestions.length > 0 ? suggestions[0] : word;
      })
      .join(' ');
  }

  // 🧾 Enhanced metrics extractor
  private extractKeyValueMetrics(text: string) {
    const metrics: Record<string, any> = {};
    const lines = text
      .split(/\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    const regex =
      /^([A-Za-z0-9 %()\-/,.]+?)\s+([\d.]+)\s*([a-zA-Z%/dL]+)?(?:\s+([<>]?\s*[\d.–-]+))?/;

    for (const line of lines) {
      const match = line.match(regex);
      if (!match) continue;

      // eslint-disable-next-line prefer-const
      let [, label, value, unit, range] = match;

      label = label
        .toLowerCase()
        .replace(/[^a-z0-9 ]+/g, '')
        .trim();

      const canonical = LAB_TEST_ALIASES[label] || this.findAlias(label);
      const key = canonical || label;

      metrics[key] = {
        value: parseFloat(value),
        unit: unit || null,
        range: range?.replace(/\s+/g, '') || null,
        raw: line,
      };
    }

    return metrics;
  }

  private findAlias(label: string): string | null {
    for (const [alias, canonical] of Object.entries(LAB_TEST_ALIASES)) {
      if (label.includes(alias)) return canonical;
    }
    return null;
  }

  // 📚 Smarter section grouping
  private parseLabReport(text: string) {
    const sections: Record<string, any[]> = {};
    let currentSection = 'General';
    sections[currentSection] = [];

    const knownSections = [
      'Haematology',
      'Biochemistry',
      'Hormones',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Thyroid Profile',
      'Electrolytes',
      'Urine Analysis',
    ];

    const lines = text
      .split(/\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    for (const line of lines) {
      const sectionMatch = knownSections.find((s) =>
        line.toLowerCase().includes(s.toLowerCase())
      );
      if (sectionMatch) {
        currentSection = sectionMatch;
        if (!sections[currentSection]) sections[currentSection] = [];
        continue;
      }

      const testMatch = line.match(
        /^([A-Za-z0-9 ()%/\-.,]+?)\s+([\d.]+)\s*([a-zA-Z/%^0-9]*)\s+([<>]?\s*[\d.\-– ]+)?$/
      );
      if (testMatch) {
        const [, test, value, unit, range] = testMatch;
        sections[currentSection].push({
          test: test.trim(),
          value: parseFloat(value),
          unit: unit || null,
          range: range?.trim() || null,
        });
      }
    }

    return { sections };
  }

  // 🧠 Optional: AI-assisted structuring via Hugging Face (small free-tier models)
  private async aiAssistStructure(plainText: string) {
    if (!process.env.HF_API_TOKEN) return null;

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct',
        {
          inputs: `Extract medical lab test results as JSON array with fields: test, value, unit, referenceRange.\n\n${plainText}`,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
          },
        }
      );

      const text = response.data?.[0]?.generated_text;
      if (text && text.includes('{')) {
        return JSON.parse(text.match(/{[\s\S]+}/)?.[0] || '{}');
      }
    } catch (err) {
      console.error('⚠️ AI-assisted structuring failed:', err.message);
    }
    return null;
  }

  // 🧩 Main processing pipeline
  async processDocument(documentId: string) {
    const document = await this.prisma.document.findUnique({
      where: { id: documentId },
    });
    if (!document) throw new NotFoundException('Document not found');

    const job = await this.prisma.processingJob.create({
      data: {
        documentId: document.id,
        status: JobStatus.PROCESSING,
        attempts: 1,
        processor: 'tesseract.js',
        startedAt: new Date(),
      },
    });

    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir))
      fs.mkdirSync(uploadsDir, { recursive: true });

    const tmpName = `${document.id}-${Date.now()}`;
    const tmpPath = path.join(uploadsDir, tmpName);

    try {
      if (!document.fileUrl)
        throw new BadRequestException('Document has no fileUrl');

      const response = await axios.get(document.fileUrl, {
        responseType: 'arraybuffer',
      });
      fs.writeFileSync(tmpPath, Buffer.from(response.data));

      const { data } = await Tesseract.recognize(tmpPath, 'eng', {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tessedit_pageseg_mode: 6, // Assume block of text
        tessedit_ocr_engine_mode: 1, // LSTM only
      });

      // Step 1: clean
      let plainText = this.cleanText(data.text);
      // Step 2: spell correct
      plainText = this.spellCorrect(plainText);
      // Step 3: extract metrics & sections
      const structuredMetrics = this.extractKeyValueMetrics(plainText);
      const structuredSections = this.parseLabReport(plainText);

      // Step 4 (optional): AI structure
      const aiStructured = await this.aiAssistStructure(plainText);

      const finalStructured = aiStructured || {
        metrics: structuredMetrics,
        sections: structuredSections,
      };

      const ocrResult = await this.prisma.ocrResult.upsert({
        where: { documentId: document.id },
        update: {
          rawJson: JSON.parse(JSON.stringify(data)),
          plainText,
          structured: finalStructured,
          language: 'eng',
          pages: (data as any).blocks?.length ?? null,
          confidence: (data as any).confidence ?? null,
        },
        create: {
          documentId: document.id,
          rawJson: JSON.parse(JSON.stringify(data)),
          plainText,
          structured: finalStructured,
          language: 'eng',
          pages: (data as any).blocks?.length ?? null,
          confidence: (data as any).confidence ?? null,
        },
      });

      await this.prisma.processingJob.update({
        where: { id: job.id },
        data: { status: JobStatus.SUCCESS, finishedAt: new Date() },
      });

      await this.prisma.document.update({
        where: { id: document.id },
        data: { processed: true },
      });

      return { jobId: job.id, ocrResultId: ocrResult.id };
    } catch (error: any) {
      await this.prisma.processingJob.update({
        where: { id: job.id },
        data: {
          status: JobStatus.FAILED,
          error: error?.message ?? 'Unknown OCR error',
          finishedAt: new Date(),
        },
      });
      throw new BadRequestException('OCR processing failed');
    } finally {
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }
}
