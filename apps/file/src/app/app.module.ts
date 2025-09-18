import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './files/files.module';

@Module({
  imports: [ConfigModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
