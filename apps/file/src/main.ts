import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@elder/nestjs';
import * as cookieParser from 'cookie-parser';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Setup Swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  // // Enable CORS
  // app.enableCors({
  //   credentials: true,
  //   exposedHeaders: ['Set-Cookie'],
  //   origin: config.getOrThrow<string>('AUTH_ALLOWED_ORIGIN').split(', '),
  //   allowedHeaders: ['Content-Type', 'Origin', 'Accept', 'Authorization'],
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  // });

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
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'file',
      protoPath: join(process.cwd(), 'proto/file.proto'),
      url: '0.0.0.0:50052',
    },
  });

  await app.startAllMicroservices();

  const port = config.getOrThrow('FILE_PORT');
  await app.listen(port);

  Logger.log(
    `🚀 File application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🚀 File gRPC service is running on: 0.0.0.0:50052`);
}

bootstrap();
