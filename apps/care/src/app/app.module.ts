import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CareModule } from './care/care.module';
import { BookingModule } from './booking/booking.module';
import { CareCategoryModule } from './care-category/care-category.module';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    CareModule,
    BookingModule,
    CareCategoryModule,
  ],
  providers: [],
})
export class AppModule {}
