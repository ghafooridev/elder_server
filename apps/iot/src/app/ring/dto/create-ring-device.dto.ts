import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateRingDeviceDto {
  @ApiProperty({ example: 'elder_dev_9707' })
  @IsString()
  deviceId!: string;

  @ApiPropertyOptional({ example: 'Grandpa’s Ring' })
  @IsOptional()
  @IsString()
  label?: string;
}
