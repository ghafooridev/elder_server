import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CareCategory {
  @ApiProperty({
    description: 'Unique identifier of the care category',
    example: 'cat12345',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Name of the care category',
    example: 'Nurse',
  })
  name: string;

  @ApiPropertyOptional({
    description: 'Description of the care category',
    example: 'Provides nursing services for patients',
  })
  description?: string | null;

  @ApiProperty({
    description: 'Date when the care category was created',
    type: String,
    format: 'date-time',
    example: '2025-09-04T12:00:00Z',
  })
  createdAt: Date;
}
