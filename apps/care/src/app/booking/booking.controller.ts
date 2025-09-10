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
  Req,
  Query,
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

  @Patch(':bookingId/status')
  @UseGuards(AuthGuard)
  @ApiUpdateBookingDocs()
  async updateBookingStatus(
    @Param('bookingId') bookingId: string,
    @Body('status') status: any,
    @Req() req: any
  ): Promise<Booking> {
    const caregiverId = req.user.id;
    return this.bookingService.updateBookingStatus(
      bookingId,
      caregiverId,
      status
    );
  }

  @Post(':bookingId/reminders')
  @UseGuards(AuthGuard)
  // @ApiAddReminderDocs() // You would create a new swagger doc for this
  async addReminder(
    @Param('bookingId') bookingId: string,
    @Req() req: any
  ): Promise<any> {
    const userId = req.user.id;
    return this.bookingService.addReminder(bookingId, userId);
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
  async getAllBookings(
    @Query('caregiverId') caregiverId?: string,
    @Query('bookerId') bookerId?: string,
    @Query('elderId') elderId?: string
  ): Promise<Booking[]> {
    return this.bookingService.getBookings({
      caregiverId,
      bookerId,
      elderId,
    });
  }
}
