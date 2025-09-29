import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { CreateVitalDto } from './create-vital.dto';

export class BulkCreateVitalDto {
  @ApiProperty({ type: [CreateVitalDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateVitalDto)
  items!: CreateVitalDto[];
}
