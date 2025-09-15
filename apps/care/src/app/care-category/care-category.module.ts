import { Module } from '@nestjs/common';
import { CareCategoryService } from './care-category.service';
import { CareCategoryController } from './care-category.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GrpcClientModule } from '../grpc-client/grpc-client.module';

@Module({
  imports: [PrismaModule, GrpcClientModule],
  providers: [CareCategoryService],
  controllers: [CareCategoryController],
  exports: [CareCategoryService],
})
export class CareCategoryModule {}
