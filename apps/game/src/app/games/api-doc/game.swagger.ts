import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GAME_TYPE } from '@prisma-clients/game';

export function ApiGetGameTypesDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'List available game types' }),
    ApiResponse({ status: 200, description: 'Array of game types' })
  );
}

export function ApiGetGamesDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'List games, optionally filter by type' }),
    ApiQuery({ name: 'type', required: false, enum: GAME_TYPE }),
    ApiResponse({ status: 200, description: 'Array of games' })
  );
}

export function ApiGetGameBySlugDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get a specific game by slug' }),
    ApiResponse({ status: 200, description: 'Game details' }),
    ApiResponse({ status: 404, description: 'Game not found' })
  );
}
