import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { GAME_TYPE } from '@prisma-clients/game';

export class GetGamesQueryDto {
  @ApiPropertyOptional({ enum: GAME_TYPE, description: 'Filter by game type' })
  @IsOptional()
  @IsEnum(GAME_TYPE)
  type?: GAME_TYPE;
}
