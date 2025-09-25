import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OcrResultModel } from '../ocr.model';

export function ApiOcrProcessDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Trigger OCR processing for a document' }),
    ApiResponse({
      status: 202,
      description: 'OCR job started successfully',
      schema: {
        example: {
          jobId: 'job-uuid',
          ocrResultId: 'ocr-uuid',
        },
      },
    })
  );
}

export function ApiGetOcrByDocumentDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get OCR result for a document' }),
    ApiResponse({
      status: 200,
      description: 'OCR result',
      type: OcrResultModel,
    })
  );
}

export function ApiGetOcrByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get OCR result by OCR ID' }),
    ApiResponse({
      status: 200,
      description: 'OCR result',
      type: OcrResultModel,
    })
  );
}
