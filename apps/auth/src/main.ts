import { AUTH_PACKAGE_NAME } from 'types/proto/auth';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@elder/nestjs';
import * as cookieParser from 'cookie-parser';
import {
  GrpcOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Swagger setup
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  // CORS setup
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

  // Express trust proxy
  const httpAdapter = app.getHttpAdapter?.();
  if (httpAdapter?.getInstance) {
    const expressInstance = httpAdapter.getInstance();
    expressInstance.set('trust proxy', true);
  }

  // Get ports and NATS URL
  const port = config.getOrThrow('AUTH_PORT');
  const natsUrl = config.get<string>('NATS_URL') || 'nats://localhost:4222';

  // --- ✅ Connect both microservices ---
  app.connectMicroservice<GrpcOptions>({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:50051`,
      package: AUTH_PACKAGE_NAME,
      protoPath: join(process.cwd(), 'proto/auth.proto'),
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: { url: natsUrl },
  });

  // Start microservices and HTTP app
  await app.startAllMicroservices();
  await app.listen(port, '0.0.0.0');

  Logger.log(
    `🚀 Auth app running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`📡 Auth microservices: gRPC (50051) + NATS (${natsUrl})`);
}

bootstrap();
