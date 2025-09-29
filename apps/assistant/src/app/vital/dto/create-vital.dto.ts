import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateVitalDto {
  @ApiProperty({ example: 'Hemoglobin', description: 'Name of the vital/test' })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 13.5,
    description: 'Numeric value of the measurement',
  })
  @IsNumber()
  value!: number;

  @ApiPropertyOptional({ example: 'g/dL', description: 'Unit of measurement' })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiPropertyOptional({
    example: '2025-09-28T08:00:00.000Z',
    description: 'Time when the vital was recorded',
  })
  @IsOptional()
  @IsDateString()
  recordedAt?: string;

  @ApiPropertyOptional({
    example: { referenceRange: '12-17' },
    description: 'Any additional metadata',
  })
  @IsOptional()
  metadata?: any;
}
