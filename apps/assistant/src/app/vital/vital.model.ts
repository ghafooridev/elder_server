import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class VitalModel {
  @ApiProperty({ example: 'vit_abc123' })
  id!: string;

  @ApiProperty({ example: 'ana_abc123' })
  analysisId!: string;

  @ApiProperty({ example: 'Hemoglobin' })
  name!: string;

  @ApiProperty({ example: 13.5 })
  value!: number;

  @ApiPropertyOptional({ example: 'g/dL' })
  unit?: string | null;

  @ApiPropertyOptional({ example: '2025-09-28T08:00:00.000Z' })
  recordedAt?: Date | null;

  @ApiPropertyOptional({ example: { referenceRange: '12-17' } })
  metadata?: Record<string, any> | null;

  @ApiProperty({ example: '2025-09-28T08:05:00.000Z' })
  createdAt!: Date;
}
