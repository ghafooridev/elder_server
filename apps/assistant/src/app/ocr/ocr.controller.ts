import {
  Controller,
  Post,
  Param,
  Get,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { OcrService } from './ocr.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@elder/nestjs';
import {
  ApiOcrProcessDocs,
  ApiGetOcrByDocumentDocs,
  ApiGetOcrByIdDocs,
} from './doc/ocr.swagger';

@ApiTags('/assistant/ocr')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('assistant/ocr')
export class OcrController {
  constructor(private readonly ocrService: OcrService) {}

  @Post(':documentId/process')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOcrProcessDocs()
  async process(@Param('documentId') documentId: string) {
    return this.ocrService.processDocument(documentId);
  }

  @Get(':documentId')
  @ApiGetOcrByDocumentDocs()
  async getByDocument(@Param('documentId') documentId: string) {
    return this.ocrService.getOcrResultByDocument(documentId);
  }

  @Get('result/:ocrId')
  @ApiGetOcrByIdDocs()
  async getById(@Param('ocrId') ocrId: string) {
    return this.ocrService.getOcrResultById(ocrId);
  }
}
