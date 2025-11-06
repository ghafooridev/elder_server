import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GamesService } from './games.service';
import { GetGamesQueryDto } from './dto/get-games.query.dto';
import {
  ApiGetGameBySlugDocs,
  ApiGetGamesDocs,
  ApiGetGameTypesDocs,
} from './api-doc/game.swagger';

@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  private getBaseUrl(req: any): string {
    const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
    const host = req.headers['x-forwarded-host'] || req.get('host');
    return `${protocol}://${host}`;
  }

  @Get('types')
  @ApiGetGameTypesDocs()
  getTypes() {
    return this.gamesService.getTypes();
  }

  @Get()
  @ApiGetGamesDocs()
  async getGames(@Req() req: any, @Query() query: GetGamesQueryDto) {
    const baseUrl = this.getBaseUrl(req);
    return this.gamesService.listGames(baseUrl, query.type);
  }

  @Get(':slug')
  @ApiGetGameBySlugDocs()
  async getGame(@Req() req: any, @Param('slug') slug: string) {
    const baseUrl = this.getBaseUrl(req);
    return this.gamesService.getBySlug(baseUrl, slug);
  }
}
