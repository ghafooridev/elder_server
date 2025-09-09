import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './booking.model';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@elder/nestjs'; // from auth app
import {
  ApiCreateBookingDocs,
  ApiUpdateBookingDocs,
  ApiDeleteBookingDocs,
  ApiGetAllBookingsDocs,
} from './doc/booking.swagger';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiCreateBookingDocs()
  async createBooking(
    @Body() createBookingDto: CreateBookingDto
  ): Promise<Booking> {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Patch(':bookingId')
  @ApiUpdateBookingDocs()
  async updateBooking(
    @Param('bookingId') bookingId: string,
    @Body() updateBookingDto: UpdateBookingDto
  ): Promise<Booking> {
    return this.bookingService.updateBooking(bookingId, updateBookingDto);
  }

  @Delete(':bookingId')
  @ApiDeleteBookingDocs()
  async deleteBooking(
    @Param('bookingId') bookingId: string
  ): Promise<{ message: string }> {
    await this.bookingService.deleteBooking(bookingId);
    return { message: 'Booking deleted successfully' };
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiGetAllBookingsDocs()
  async getAllBookings(): Promise<Booking[]> {
    console.log('first');
    return this.bookingService.getBookings();
  }
}
