import { AUTH_PACKAGE_NAME } from 'types/proto/auth';
import { Module } from '@nestjs/common';
import { RemindersService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    ClientsModule.register([
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: AUTH_PACKAGE_NAME,
          protoPath: join(process.cwd(), 'proto/auth.proto'),
        },
      },
    ]),
  ],
  providers: [RemindersService],
  controllers: [ReminderController],
  exports: [RemindersService],
})
export class RemindersModule {}
