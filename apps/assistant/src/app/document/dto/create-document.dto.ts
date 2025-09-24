import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsUrl, IsNumber } from 'class-validator';
import { DocumentType } from '@prisma-clients/assistant';

export class CreateDocumentDto {
  @ApiProperty({
    example: 'user-uuid-1234',
    description: 'ID of the uploader (Elder)',
  })
  @IsString()
  userId: string;

  @ApiPropertyOptional({
    example: 'caregiver-uuid-5678',
    description: 'Optional: caregiver this document is shared with',
  })
  @IsOptional()
  @IsString()
  caregiverId?: string;

  @ApiPropertyOptional({
    example: 'file-service-id-abc',
    description: 'Optional: ID in file service',
  })
  @IsOptional()
  @IsString()
  fileServiceId?: string;

  @ApiProperty({
    example: 'https://supabase.example.com/storage/files/myfile.pdf',
    description: 'Public file URL',
  })
  @IsUrl()
  fileUrl: string;

  @ApiPropertyOptional({
    example: 'myfile.pdf',
    description: 'Original file name',
  })
  @IsOptional()
  @IsString()
  fileName?: string;

  @ApiPropertyOptional({
    example: 'application/pdf',
    description: 'MIME type of the file',
  })
  @IsOptional()
  @IsString()
  mimeType?: string;

  @ApiPropertyOptional({ example: 102400, description: 'File size in bytes' })
  @IsOptional()
  @IsNumber()
  size?: number;

  @ApiProperty({
    example: DocumentType.BLOOD_REPORT,
    enum: DocumentType,
    description: 'Type of the document',
  })
  @IsEnum(DocumentType)
  type: DocumentType;

  @ApiPropertyOptional({
    example: { scanner: 'scan-app', resolution: '300dpi' },
    description: 'Optional metadata for the document',
  })
  @IsOptional()
  metadata?: any | null;
}
