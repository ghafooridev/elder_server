import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { Document } from './document.model';
import { FILE_SERVICE_NAME } from 'types/proto/file';
import { ClientGrpc } from '@nestjs/microservices';
import { FileServiceClient } from 'types/proto/file';
import { lastValueFrom } from 'rxjs';
import * as multer from 'multer';
import { Prisma } from '@prisma-clients/assistant';
import { OcrService } from '../ocr/ocr.service';
import { AnalysisService } from '../analysis/analysis.service';

@Injectable()
export class DocumentService {
  private readonly fileService: FileServiceClient;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(FILE_SERVICE_NAME) private readonly client: ClientGrpc,
    private readonly ocrService: OcrService,
    private readonly analysisService: AnalysisService
  ) {
    this.fileService =
      this.client.getService<FileServiceClient>(FILE_SERVICE_NAME);
  }

  /**
   * Create a new document for an elder
   */
  async createDocument(
    createDto: CreateDocumentDto,
    userId: string,
    file: multer.File
  ): Promise<Document> {
    try {
      // 1️⃣ Upload file to Supabase via File Microservice
      const uploadedFile = await lastValueFrom(
        this.fileService.uploadFile({
          fileName: file.originalname,
          fileData: file.buffer,
        })
      ).catch((err) => {
        console.error('File service error:', err);
        throw new BadRequestException('Failed to upload file.');
      });

      // 2️⃣ Create document record
      const document = await this.prisma.document.create({
        data: {
          ...createDto,
          userId,
          fileUrl: uploadedFile.fileUrl,
          fileName: file.originalname,
          mimeType: file.mimetype,
          size: file.size,
        },
      });

      // 3️⃣ Delegate OCR processing to OCR service
      await this.ocrService.processDocument(document.id);

      // 4️⃣ Trigger AI analysis using Hugging Face via AnalysisService
      // Defaults can be adjusted or sourced from env/config
      const defaultModel =
        process.env.HF_DEFAULT_MODEL || 'Qwen/Qwen2.5-7B-Instruct';
      const defaultPrompt =
        'Analyze the patient report. Summarize key findings, flag out-of-range metrics, and provide actionable recommendations (diet, lifestyle, when to see a doctor).';
      try {
        // TODO: If/when a profile service exposes age/sex/weight/height, fetch here using requestedBy
        const elderInfo: {
          age?: number;
          sex?: string;
          weight?: number;
          height?: number;
        } = {};
        await this.analysisService.analyzeDocument(
          document.id,
          elderInfo,
          defaultModel,
          defaultPrompt,
          userId
        );
      } catch (analysisErr) {
        // Do not fail document creation if analysis fails; log for observability
        console.error('Auto-analysis failed:', analysisErr);
      }

      return document;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Failed to create document');
    }
  }

  /**
   * Update an existing document
   */
  async updateDocument(
    documentId: string,
    updateDto: UpdateDocumentDto
  ): Promise<Document> {
    // 1️⃣ Ensure the document exists
    const existingDoc = await this.prisma.document.findUnique({
      where: { id: documentId },
    });
    if (!existingDoc) {
      throw new NotFoundException('Document not found');
    }

    // 2️⃣ Prepare update data
    // Only include fields that are defined (all are optional in DTO)
    const updateData: Prisma.DocumentUpdateInput = {};
    if (updateDto.fileName !== undefined)
      updateData.fileName = updateDto.fileName;
    if (updateDto.fileUrl !== undefined) updateData.fileUrl = updateDto.fileUrl;
    if (updateDto.mimeType !== undefined)
      updateData.mimeType = updateDto.mimeType;
    if (updateDto.size !== undefined) updateData.size = updateDto.size;
    if (updateDto.type !== undefined) updateData.type = updateDto.type;
    if (updateDto.caregiverId !== undefined)
      updateData.caregiverId = updateDto.caregiverId;
    if (updateDto.metadata !== undefined) {
      // Ensure JSON-safe value
      updateData.metadata = JSON.parse(JSON.stringify(updateDto.metadata));
    }

    // 3️⃣ Perform the update
    const updatedDoc = await this.prisma.document.update({
      where: { id: documentId },
      data: updateData,
    });

    return updatedDoc;
  }

  /**
   * Delete a document
   */
  async deleteDocument(documentId: string): Promise<void> {
    const doc = await this.prisma.document.findUnique({
      where: { id: documentId },
    });
    if (!doc) throw new NotFoundException('Document not found');

    await this.prisma.document.delete({ where: { id: documentId } });
  }

  /**
   * Get all documents uploaded by a specific elder
   */
  async getDocumentsByElder(userId: string): Promise<Document[]> {
    return this.prisma.document.findMany({
      where: { userId },
      orderBy: { uploadedAt: 'desc' },
    });
  }

  /**
   * Get a single document by ID
   */
  async getDocument(documentId: string): Promise<Document> {
    const doc = await this.prisma.document.findUnique({
      where: { id: documentId },
    });
    if (!doc) throw new NotFoundException('Document not found');
    return doc;
  }

  /**
   * Optional: get documents shared with a caregiver
   */
  async getDocumentsSharedWithCaregiver(
    caregiverId: string
  ): Promise<Document[]> {
    return this.prisma.document.findMany({
      where: { caregiverId },
      orderBy: { uploadedAt: 'desc' },
    });
  }
}
