import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { OcrService } from './ocr.service';
import { OcrController } from './ocr.controller';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';

@Module({
  imports: [PrismaModule, GrpcClientModule],
  controllers: [OcrController],
  providers: [OcrService],
  exports: [OcrService],
})
export class OcrModule {}
