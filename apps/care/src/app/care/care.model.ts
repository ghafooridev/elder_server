import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Care {
  @ApiProperty({
    description: 'Unique identifier of the care',
    example: 'a1b2c3d4',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Title of the care service',
    example: 'General Checkup',
  })
  title: string;

  @ApiPropertyOptional({
    description: 'Detailed description of the care service',
    example: 'A full health checkup including blood pressure and lab tests',
  })
  description?: string | null;

  @ApiProperty({
    description: 'Price of the care service',
    example: 50.0,
  })
  price: number;

  @ApiPropertyOptional({
    description: 'Duration of the care service in minutes',
    example: 60,
  })
  durationMin?: number | null;

  @ApiProperty({
    description: 'ID of the care category (e.g., Caregiver, Nurse, Doctor)',
    example: 'cat12345',
  })
  categoryId: string;

  @ApiProperty({
    description: 'ID of the caregiver offering this care service',
    example: 'caregiver12345',
  })
  caregiverId: string;

  @ApiProperty({
    description: 'Date when the care service was created',
    type: String,
    format: 'date-time',
    example: '2025-09-04T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the care service was last updated',
    type: String,
    format: 'date-time',
    example: '2025-09-04T13:00:00Z',
  })
  updatedAt: Date;
}
