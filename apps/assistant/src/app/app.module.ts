import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './document/document.module';
import { OcrModule } from './ocr/ocr.module';

@Module({
  imports: [ConfigModule, PrismaModule, DocumentModule, OcrModule],
  providers: [],
})
export class AppModule {}
