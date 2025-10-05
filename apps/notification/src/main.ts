// import { Logger, ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
// import { SwaggerModule } from '@nestjs/swagger';
// import { swaggerConfig } from '@elder/nestjs';
// import * as cookieParser from 'cookie-parser';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const config = app.get(ConfigService);

//   const document = SwaggerModule.createDocument(app, swaggerConfig);
//   SwaggerModule.setup('api-docs', app, document);

//   // Enable CORS
//   app.enableCors({
//     credentials: true,
//     exposedHeaders: ['Set-Cookie'],
//     origin: config
//       .getOrThrow<string>('ALLOWED_ORIGIN')
//       .split(',')
//       .map((o) => o.trim())
//       .filter(Boolean),
//     allowedHeaders: ['Content-Type', 'Origin', 'Accept', 'Authorization'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   });

//   app.use(cookieParser());

//   const globalPrefix = 'api';
//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       transform: true,
//       forbidNonWhitelisted: true,
//     })
//   );
//   app.setGlobalPrefix(globalPrefix);

//   // set trust proxy for express (if using express adapter)
//   const httpAdapter = app.getHttpAdapter?.();
//   if (httpAdapter?.getInstance) {
//     const expressInstance = httpAdapter.getInstance();
//     expressInstance.set('trust proxy', true);
//   }

//   const port = config.getOrThrow('NOTIFICATION_PORT');
//   await app.listen(port, '0.0.0.0');
//   Logger.log(
//     `🚀 Notification application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'notification-workers', // for competing consumers if you scale
      },
    }
  );
  await app.listen();
  console.log('Notification microservice listening (NATS).');
}
bootstrap();
