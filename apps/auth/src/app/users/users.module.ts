import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersGrpcController } from './users.grpc.controller';

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  controllers: [UserController, UsersGrpcController],
  exports: [UsersService],
})
export class UsersModule {}
