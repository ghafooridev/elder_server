import { AUTH_PACKAGE_NAME } from 'types/proto/auth';

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
  // bind to 0.0.0.0 so other containers can connect
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Auth application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
