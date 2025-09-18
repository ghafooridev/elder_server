import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@elder/nestjs';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

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
  const port = config.getOrThrow('PRODUCT_PORT');
  await app.listen(port);
  Logger.log(
    `🚀 Product application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
