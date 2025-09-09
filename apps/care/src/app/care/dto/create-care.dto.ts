import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCareDto {
  @ApiProperty({
    description: 'Title of the care service',
    example: 'General Checkup',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    description: 'Detailed description of the care service',
    example: 'A full health checkup including blood pressure and lab tests',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Price of the care service',
    example: 50.0,
  })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({
    description: 'Duration of the care service in minutes',
    example: 60,
  })
  @IsOptional()
  @IsNumber()
  durationMin?: number;

  @ApiProperty({
    description: 'ID of the care category (e.g., Caregiver, Nurse, Doctor)',
    example: 'cat12345',
  })
  @IsString()
  categoryId: string;

  @ApiProperty({
    description: 'ID of the provider offering this care service',
    example: 'provider12345',
  })
  @IsString()
  providerId: string;
}
