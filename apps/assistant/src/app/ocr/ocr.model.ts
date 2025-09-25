import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OcrResultModel {
  @ApiProperty({ example: 'ckx123abc' })
  id: string;

  @ApiProperty({ example: 'doc_abc123' })
  documentId: string;

  @ApiProperty({ example: { blocks: [], text: '...' } })
  rawJson: Record<string, any>;

  @ApiProperty({ example: 'Detected plain text from OCR' })
  plainText: string;

  @ApiPropertyOptional({ example: 'eng' })
  language?: string | null;

  @ApiPropertyOptional({ example: 2 })
  pages?: number | null;

  @ApiPropertyOptional({ example: 92.5 })
  confidence?: number | null;

  @ApiProperty({ example: '2025-09-24T10:15:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-09-24T10:16:00.000Z' })
  updatedAt: Date;

  @ApiProperty({ example: { sections: {} } })
  structured?: Record<string, any>;
}
