import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RemindersModule } from './reminders/reminder.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, PrismaModule, RemindersModule],
  providers: [],
})
export class AppModule {}
