import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class QueryLatestDto {
  @ApiPropertyOptional({ example: 'elder_dev_9707' })
  @IsString()
  deviceId!: string;
}
