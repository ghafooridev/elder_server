import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Serve static files from the public folder
  app.useStaticAssets(join(process.cwd(), 'apps/game/public'));

  await app.listen(3000);
  console.log(`✅ Game service running at: http://localhost:3000`);
  console.log(
    `🎮 Tangram: http://localhost:3000/games/memory/tangram/index.html`
  );
}
bootstrap();
