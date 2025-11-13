import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class QueryHistoryDto {
  @ApiPropertyOptional({ example: 'elder_dev_9707' })
  @IsString()
  deviceId!: string;

  @ApiPropertyOptional({ example: 20 })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 20;
}
