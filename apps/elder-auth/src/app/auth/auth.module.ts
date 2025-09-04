import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow('AUTH_JWT_SECRET'),
        signOptions: {
          expiresIn: configService.getOrThrow('AUTH_JWT_EXPIRATION_MS'),
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
