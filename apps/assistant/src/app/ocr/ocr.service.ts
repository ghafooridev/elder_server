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

// Spell checker
import nspell from 'nspell';
// Hunspell dictionary (install with `npm install dictionary-en nspell`)
// import dictionary from 'dictionary-en';

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
      console.log('Spell-check dictionary loaded successfully');
    } catch (err) {
      console.error('Spell-check dictionary init failed:', err);
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

  /**
   * Utility to clean noisy OCR text
   */
  private cleanText(raw: string): string {
    return raw
      .replace(/[^a-zA-Z0-9\s.,:;!?()\-%]/g, '') // remove weird symbols
      .replace(/\s{2,}/g, ' ') // collapse extra spaces
      .replace(/\n\s*\n/g, '\n\n') // normalize empty lines
      .trim();
  }

  /**
   * Spell-correct text using nspell
   */
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

  /**
   * Parse lab report text into structured data
   */
  private parseLabReport(text: string) {
    const sections: Record<string, any[]> = {};
    let currentSection: string | null = null;

    const lines = text
      .split(/\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    for (const line of lines) {
      // Detect section headers
      if (/Sex Hormones/i.test(line)) {
        currentSection = 'Sex Hormones';
        sections[currentSection] = [];
        continue;
      }
      if (/Haematology/i.test(line)) {
        currentSection = 'Haematology';
        sections[currentSection] = [];
        continue;
      }
      if (/Cell Differential/i.test(line)) {
        currentSection = 'White Cell Differential';
        sections[currentSection] = [];
        continue;
      }

      // Try to capture test rows
      const match = line.match(
        /^([A-Za-z %]+)\s+([\d.]+)\s*([A-Za-z/%^0-9]*)\s+([\d.\-– ]+)?$/
      );
      if (match && currentSection) {
        const [, test, value, unit, range] = match;
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

  async processDocument(documentId: string) {
    const document = await this.prisma.document.findUnique({
      where: { id: documentId },
    });
    if (!document) throw new NotFoundException('Document not found');

    // Create a processing job
    const job = await this.prisma.processingJob.create({
      data: {
        documentId: document.id,
        status: JobStatus.PROCESSING,
        attempts: 1,
        processor: 'tesseract.js',
        startedAt: new Date(),
      },
    });

    // Prepare temp folder
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir))
      fs.mkdirSync(uploadsDir, { recursive: true });

    const tmpName = `${document.id}-${Date.now()}`;
    const tmpPath = path.join(uploadsDir, tmpName);

    try {
      // Download the file referenced by fileUrl
      if (!document.fileUrl)
        throw new BadRequestException('Document has no fileUrl');
      const response = await axios.get(document.fileUrl, {
        responseType: 'arraybuffer',
      });
      fs.writeFileSync(tmpPath, Buffer.from(response.data));

      // Run OCR (use English; with improved settings)
      const { data } = await Tesseract.recognize(tmpPath, 'eng', {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tessedit_pageseg_mode: 6, // Assume block of text
        tessedit_ocr_engine_mode: 1, // LSTM only
      });

      // Step 1: Clean text
      let plainText = this.cleanText(data.text);

      // Step 2: Spell-check & auto-correct
      plainText = this.spellCorrect(plainText);

      // Upsert OCR result (unique per document)
      const ocrResult = await this.prisma.ocrResult.upsert({
        where: { documentId: document.id },
        update: {
          rawJson: JSON.parse(JSON.stringify(data)),
          plainText,
          structured: this.parseLabReport(plainText),
          language: 'eng',
          pages: (data as any).blocks?.length ?? null,
          confidence: (data as any).confidence ?? null,
        },
        create: {
          documentId: document.id,
          rawJson: JSON.parse(JSON.stringify(data)),
          plainText,
          structured: this.parseLabReport(plainText),
          language: 'eng',
          pages: (data as any).blocks?.length ?? null,
          confidence: (data as any).confidence ?? null,
        },
      });

      // Mark job success
      await this.prisma.processingJob.update({
        where: { id: job.id },
        data: { status: JobStatus.SUCCESS, finishedAt: new Date() },
      });

      // Mark document processed flag
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
      // Cleanup temp file
      try {
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      } catch {
        /* empty */
      }
    }
  }
}
