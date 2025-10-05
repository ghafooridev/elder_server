import { Module } from '@nestjs/common';
import { DevicesController } from './device.controller';
import { DevicesService } from './device.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DevicesController],
  providers: [DevicesService],
  exports: [DevicesService],
})
export class DevicesModule {}
