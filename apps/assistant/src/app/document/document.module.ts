import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';
import { OcrModule } from '../ocr/ocr.module';

@Module({
  imports: [PrismaModule, GrpcClientModule, OcrModule],
  providers: [DocumentService],
  controllers: [DocumentController],
  exports: [DocumentService],
})
export class DocumentModule {}
