import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [ConfigModule, PrismaModule, GamesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
