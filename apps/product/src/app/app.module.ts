import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, PrismaModule, ProductsModule],
  providers: [],
})
export class AppModule {}
