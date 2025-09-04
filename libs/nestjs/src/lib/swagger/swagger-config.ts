import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    in: 'header',
    name: 'Authorization',
    description: 'Enter your Bearer token',
  })
  .addSecurityRequirements('bearer')
  .setTitle('EC API')
  .setDescription('API documentation for elder care')
  .setVersion('1.0')
  .addServer('http://localhost:4100/', 'Local')
  .addServer('https://staging.yourapi.com/', 'Staging')
  .addServer('https://production.yourapi.com/', 'Production')
  .build();
