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

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Generate the Swagger document in '/api-docs'
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  // cors
  app.enableCors({
    credentials: true,
    exposedHeaders: ['Set-Cookie'],
    origin: config.getOrThrow<string>('AUTH_ALLOWED_ORIGIN').split(', '),
    allowedHeaders: ['Content-Type', 'Origin', 'Accept', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  });

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
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
