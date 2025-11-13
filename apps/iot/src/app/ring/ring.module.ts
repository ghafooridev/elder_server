import { Module } from '@nestjs/common';
import { RingService } from './ring.service';
import { RingController } from './ring.controller';
import { RingGateway } from './ring.gateway';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PrismaModule,
    GrpcClientModule,
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: {
          url:
            process.env.NATS_URL ||
            process.env.NATS_CLIENT_URL ||
            'nats://localhost:4222',
        },
      },
    ]),
  ],
  providers: [RingService, RingGateway],
  controllers: [RingController],
})
export class RingModule {}
