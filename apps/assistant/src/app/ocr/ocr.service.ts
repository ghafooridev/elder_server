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

  /**
   * Extract key-value numeric metrics from messy OCR text (for lab reports)
   */
  private extractKeyValueMetrics(text: string) {
    const metrics: Record<string, number> = {};
    const lines = text
      .split(/\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    for (const line of lines) {
      // Match patterns like "HbA1c 8.0", "Blood glucose 275.7 (182.3)"
      const match = line.match(
        /^([A-Za-z0-9 ,./%()-]+?)\s+([\d.]+)(?:\s*\([^)]+\))?/
      );
      if (match) {
        const [, label, value] = match;
        const cleanLabel = label
          .replace(/\s+/g, ' ')
          .replace(/[:%]/g, '')
          .trim();

        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
          metrics[cleanLabel] = numericValue;
        }
      }
    }

    return metrics;
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

      // Step 3: Extract structured metrics
      const structuredMetrics = this.extractKeyValueMetrics(plainText);

      // Step 4: Combine with existing parsed sections
      const structured = {
        metrics: structuredMetrics,
        sections: this.parseLabReport(plainText),
      };

      // Upsert OCR result (unique per document)
      const ocrResult = await this.prisma.ocrResult.upsert({
        where: { documentId: document.id },
        update: {
          rawJson: JSON.parse(JSON.stringify(data)),
          plainText,
          structured,
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
