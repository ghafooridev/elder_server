import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DevicesModule } from './device/device.module';

@Module({
  imports: [ConfigModule, PrismaModule, UsersModule, AuthModule, DevicesModule],
  providers: [],
})
export class AppModule {}
