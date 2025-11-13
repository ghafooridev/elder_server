import { Logger, RequestMethod, ValidationPipe } from '@nestjs/common';
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

  // Global settings
  const globalPrefix = 'api';
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'socket.io', method: RequestMethod.ALL }],
  });

  // set trust proxy for express (if using express adapter)
  const httpAdapter = app.getHttpAdapter?.();
  if (httpAdapter?.getInstance) {
    const expressInstance = httpAdapter.getInstance();
    expressInstance.set('trust proxy', true);
  }

  const port = config.getOrThrow('TALK_PORT');
  await app.listen(port, '0.0.0.0');

  Logger.log(
    `🚀 Talk application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
