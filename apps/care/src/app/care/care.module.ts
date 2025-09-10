import { Module } from '@nestjs/common';
import { CareService } from './care.service';
import { CareController } from './care.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';

@Module({
  imports: [PrismaModule, GrpcClientModule],
  providers: [CareService],
  controllers: [CareController],
  exports: [CareService],
})
export class CareModule {}
