import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { Document } from './document.model';
import * as path from 'path';
import { FILE_SERVICE_NAME } from 'types/proto/file';
import { ClientGrpc } from '@nestjs/microservices';
import { FileServiceClient } from 'types/proto/file';
import { lastValueFrom } from 'rxjs';
import * as multer from 'multer';
import * as fs from 'fs';
import * as Tesseract from 'tesseract.js';
import { Prisma } from '@prisma-clients/assistant';

@Injectable()
export class DocumentService {
  private readonly fileService: FileServiceClient;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(FILE_SERVICE_NAME) private readonly client: ClientGrpc
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

      // 3️⃣ Save file temporarily for OCR
      const tempFilePath = path.join('uploads', file.originalname);
      fs.writeFileSync(tempFilePath, file.buffer);

      // 4️⃣ Run OCR
      const { data } = await Tesseract.recognize(tempFilePath, 'eng');

      // 5️⃣ Remove temp file
      fs.unlinkSync(tempFilePath);

      // 6️⃣ Save OCR result in DB
      await this.prisma.ocrResult.create({
        data: {
          documentId: document.id,
          rawJson: JSON.parse(JSON.stringify(data)),
          plainText: data.text,
          language: 'eng',
          pages: data.blocks?.length || null,
          confidence: data.confidence || null,
        },
      });

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
