import { Module } from '@nestjs/common';
import { RemindersService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from './grpc-client/grpc-client.module';

@Module({
  imports: [PrismaModule, GrpcClientModule],
  providers: [RemindersService],
  controllers: [ReminderController],
  exports: [RemindersService],
})
export class RemindersModule {}
