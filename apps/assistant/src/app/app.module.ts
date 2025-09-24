import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [ConfigModule, PrismaModule, DocumentModule],
  providers: [],
})
export class AppModule {}
