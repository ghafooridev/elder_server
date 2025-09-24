import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from 'types/proto/auth';
import { FILE_PACKAGE_NAME, FILE_SERVICE_NAME } from 'types/proto/file';

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
        name: FILE_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: FILE_PACKAGE_NAME,
          protoPath: join(process.cwd(), 'proto/file.proto'),
          url: '0.0.0.0:50052',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcClientModule {}
