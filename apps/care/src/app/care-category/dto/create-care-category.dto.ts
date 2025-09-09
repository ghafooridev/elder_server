import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateCareCategoryDto {
  @ApiProperty({
    description: 'Name of the care category',
    example: 'Nurse',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Description of the care category',
    example: 'Provides nursing services for patients',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
