import { DocumentService } from './document.service';
import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { Document } from './document.model';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@elder/nestjs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  ApiCreateDocumentDocs,
  ApiUpdateDocumentDocs,
  ApiDeleteDocumentDocs,
  ApiGetAllDocumentDocs,
  ApiGetDocumentDocsById,
} from './api-doc/document.swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage, multer } from 'multer';

@ApiTags('/assistant/documents')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  @ApiCreateDocumentDocs()
  async createDocument(
    @Body() createDocumentDto: CreateDocumentDto,
    @UploadedFile() file: multer.File,
    @Req() req: { user: { id: string } }
  ): Promise<Document> {
    const userId = req.user.id; // elder ID
    return this.documentService.createDocument(
      createDocumentDto,
      userId,
      file as any
    );
  }

  @Patch(':documentId')
  @ApiUpdateDocumentDocs()
  async updateDocument(
    @Param('documentId') documentId: string,
    @Body() updateDocumentDto: UpdateDocumentDto
  ): Promise<Document> {
    return this.documentService.updateDocument(documentId, updateDocumentDto);
  }

  @Delete(':documentId')
  @ApiDeleteDocumentDocs()
  async deleteDocument(
    @Param('documentId') documentId: string
  ): Promise<{ message: string }> {
    await this.documentService.deleteDocument(documentId);
    return { message: 'Document deleted successfully' };
  }

  @Get()
  @ApiGetAllDocumentDocs()
  async getAllDocuments(
    @Req() req: { user: { id: string } }
  ): Promise<Document[]> {
    const userId = req.user.id; // elder ID
    return this.documentService.getDocumentsByElder(userId);
  }

  @Get('shared')
  @ApiGetAllDocumentDocs()
  async getSharedDocuments(
    @Req() req: { user: { id: string } }
  ): Promise<Document[]> {
    const caregiverId = req.user.id;
    return this.documentService.getDocumentsSharedWithCaregiver(caregiverId);
  }

  @Get(':documentId')
  @ApiGetDocumentDocsById()
  async getDocument(
    @Param('documentId') documentId: string
  ): Promise<Document> {
    return this.documentService.getDocument(documentId);
  }
}
