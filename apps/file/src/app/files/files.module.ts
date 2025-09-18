import { Module } from '@nestjs/common';
import { FileService } from './files.service';
import { ConfigModule } from '@nestjs/config';
import { FilesController } from './files.controller';

@Module({
  imports: [ConfigModule],
  controllers: [FilesController],
  providers: [FileService],
  exports: [FileService],
})
export class FilesModule {}
