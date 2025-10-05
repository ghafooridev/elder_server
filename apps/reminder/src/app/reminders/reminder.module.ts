import { Module } from '@nestjs/common';
import { RemindersService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from './grpc-client/grpc-client.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PrismaModule,
    GrpcClientModule,
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: { url: process.env.NATS_URL || 'nats://localhost:4222' },
      },
    ]),
  ],
  providers: [RemindersService],
  controllers: [ReminderController],
  exports: [RemindersService],
})
export class RemindersModule {}
