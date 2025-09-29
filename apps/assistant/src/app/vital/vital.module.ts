import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { VitalService } from './vital.service';
import { VitalController } from './vital.controller';

@Module({
  imports: [PrismaModule, ConfigModule],
  providers: [VitalService],
  controllers: [VitalController],
  exports: [VitalService],
})
export class VitalModule {}
