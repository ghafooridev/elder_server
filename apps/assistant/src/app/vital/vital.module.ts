import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';
import { VitalService } from './vital.service';
import { VitalController } from './vital.controller';

@Module({
  imports: [PrismaModule, ConfigModule, GrpcClientModule],
  providers: [VitalService],
  controllers: [VitalController],
  exports: [VitalService],
})
export class VitalModule {}
