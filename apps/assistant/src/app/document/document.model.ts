import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DocumentType, Prisma } from '@prisma-clients/assistant';

export class Document {
  @ApiProperty({ example: 'a3f5e2b4-6d0c-4f4b-8a1f-c2b9d7f3e6b7' })
  id: string;

  @ApiProperty({
    example: 'user-uuid-1234',
    description: 'ID of the uploader (Elder)',
  })
  userId: string;

  @ApiPropertyOptional({
    example: 'caregiver-uuid-5678',
    description: 'Optional: caregiver this document is shared with',
  })
  caregiverId?: string | null;

  @ApiPropertyOptional({
    example: 'file-service-id-abc',
    description: 'Optional: ID in file service',
  })
  fileServiceId?: string | null;

  @ApiProperty({
    example: 'https://supabase.example.com/storage/files/myfile.pdf',
    description: 'Public file URL',
  })
  fileUrl: string;

  @ApiPropertyOptional({
    example: 'myfile.pdf',
    description: 'Original file name',
  })
  fileName?: string | null;

  @ApiPropertyOptional({
    example: 'application/pdf',
    description: 'MIME type of the file',
  })
  mimeType?: string | null;

  @ApiPropertyOptional({ example: 102400, description: 'File size in bytes' })
  size?: number | null;

  @ApiProperty({
    example: DocumentType.BLOOD_REPORT,
    enum: DocumentType,
    description: 'Type of the document',
  })
  type: DocumentType;

  @ApiProperty({
    example: '2025-09-24T10:15:00.000Z',
    description: 'Date and time when the file was uploaded',
  })
  uploadedAt: Date;

  @ApiProperty({
    example: false,
    description: 'Whether the document has been processed',
  })
  processed: boolean;

  @ApiPropertyOptional({
    example: { scanner: 'scan-app', resolution: '300dpi' },
    description: 'Optional metadata for the document',
  })
  metadata?: Prisma.JsonValue | null;
}
