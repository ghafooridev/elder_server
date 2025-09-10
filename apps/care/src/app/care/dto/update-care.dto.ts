import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCareDto {
  @ApiPropertyOptional({
    description: 'Title of the care service',
    example: 'General Checkup',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Detailed description of the care service',
    example: 'A full health checkup including blood pressure and lab tests',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Price of the care service',
    example: 50.0,
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    description: 'Duration of the care service in minutes',
    example: 60,
  })
  @IsOptional()
  @IsNumber()
  durationMin?: number;

  @ApiPropertyOptional({
    description: 'ID of the care category (e.g., Caregiver, Nurse, Doctor)',
    example: 'cat12345',
  })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiPropertyOptional({
    description: 'ID of the caregiver offering this care service',
    example: 'caregiver12345',
  })
  @IsOptional()
  @IsString()
  caregiverId?: string;
}
