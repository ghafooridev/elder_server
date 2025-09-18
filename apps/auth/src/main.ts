import { AUTH_PACKAGE_NAME } from './../../../types/proto/auth';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@elder/nestjs';
import * as cookieParser from 'cookie-parser';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Generate the Swagger document in '/api-docs'
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  // // cors
  // app.enableCors({
  //   credentials: true,
  //   exposedHeaders: ['Set-Cookie'],
  //   origin: config.getOrThrow<string>('AUTH_ALLOWED_ORIGIN').split(', '),
  //   allowedHeaders: ['Content-Type', 'Origin', 'Accept', 'Authorization'],
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  // });

  app.use(cookieParser());

  const globalPrefix = 'api';
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );
  app.setGlobalPrefix(globalPrefix);
  const port = config.getOrThrow('AUTH_PORT');
  app.connectMicroservice<GrpcOptions>({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:50051`,
      package: AUTH_PACKAGE_NAME,
      protoPath: join(process.cwd(), 'proto/auth.proto'), //TODO: check path using __dirname instead of process.cwd()
    },
  });

  await app.startAllMicroservices();
  await app.listen(port);
  Logger.log(
    `🚀 Auth application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
