/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@elder/nestjs';
import * as cookieParser from 'cookie-parser';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { REMINDER_PACKAGE_NAME } from 'types/proto/reminder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Enable CORS
  app.enableCors({
    credentials: true,
    exposedHeaders: ['Set-Cookie'],
    origin: config
      .getOrThrow<string>('ALLOWED_ORIGIN')
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean),
    allowedHeaders: ['Content-Type', 'Origin', 'Accept', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: REMINDER_PACKAGE_NAME,
      protoPath: join(process.cwd(), 'proto/reminder.proto'),
      url: '0.0.0.0:50053',
    },
  });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

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

  // set trust proxy for express (if using express adapter)
  const httpAdapter = app.getHttpAdapter?.();
  if (httpAdapter?.getInstance) {
    const expressInstance = httpAdapter.getInstance();
    expressInstance.set('trust proxy', true);
  }

  await app.startAllMicroservices();
  const port = config.getOrThrow('REMINDER_PORT');
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Reminder application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🚀 Reminder gRPC service is running on: 0.0.0.0:50053`);
}

bootstrap();
