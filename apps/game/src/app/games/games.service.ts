import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GAME_TYPE } from '@prisma-clients/game';

export type GameDto = {
  id: string;
  name: string;
  slug: string;
  type: GAME_TYPE;
  publicPath: string; // relative path under public
  url: string; // absolute URL constructed for clients (e.g., RN WebView)
};

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  getTypes(): GAME_TYPE[] {
    return Object.values(GAME_TYPE);
  }

  async listGames(baseUrl: string, type?: GAME_TYPE): Promise<GameDto[]> {
    const games = await this.prisma.game.findMany({
      where: { isActive: true, ...(type ? { type } : {}) },
      orderBy: { name: 'asc' },
    });

    return games.map((g) => ({
      id: g.id,
      name: g.name,
      slug: g.slug,
      type: g.type as unknown as GAME_TYPE,
      publicPath: g.publicPath,
      url: new URL(
        g.publicPath.replace(/^\//, ''),
        baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'
      ).toString(),
    }));
  }

  async getBySlug(baseUrl: string, slug: string): Promise<GameDto> {
    const game = await this.prisma.game.findUnique({ where: { slug } });
    if (!game || !game.isActive) throw new NotFoundException('Game not found');
    return {
      id: game.id,
      name: game.name,
      slug: game.slug,
      type: game.type as unknown as GAME_TYPE,
      publicPath: game.publicPath,
      url: new URL(
        game.publicPath.replace(/^\//, ''),
        baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'
      ).toString(),
    };
  }
}
