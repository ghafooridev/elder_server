import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './document/document.module';
import { OcrModule } from './ocr/ocr.module';
import { VitalModule } from './vital/vital.module';

@Module({
  imports: [ConfigModule, PrismaModule, DocumentModule, OcrModule, VitalModule],
  providers: [],
})
export class AppModule {}
