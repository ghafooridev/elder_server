import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ConfigModule, PrismaModule, ProductsModule],
  providers: [ProductsService],
})
export class AppModule {}
