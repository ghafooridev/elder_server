import { Module } from '@nestjs/common';
import { RemindersService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RemindersService],
  controllers: [ReminderController],
  exports: [RemindersService],
})
export class RemindersModule {}
