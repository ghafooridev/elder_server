import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from 'types/proto/auth';
import { REMINDER_PACKAGE_NAME } from 'types/proto/reminder';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(process.cwd(), 'proto/auth.proto'),
          url: '0.0.0.0:50051',
        },
      },
      {
        name: REMINDER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: REMINDER_PACKAGE_NAME,
          protoPath: join(process.cwd(), 'proto/reminder.proto'),
          url: '0.0.0.0:50052', // Assuming reminder service runs on this port
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcClientModule {}
