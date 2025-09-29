import { BookingService } from './booking.service';
import { CreateBookingDto, UpdateBookingDto } from './dto';
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
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@elder/nestjs';
import {
  ApiCreateBookingDocs,
  ApiUpdateBookingDocs,
  ApiDeleteBookingDocs,
  ApiGetAllBookingsDocs,
} from './api-doc/booking.swagger';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('bookings')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiCreateBookingDocs()
  async createBooking(
    @Body() createBookingDto: CreateBookingDto,
    @Req() req: any
  ): Promise<Booking> {
    const user = req.user as { id: string; role: string };

    const bookerId = user.id; // always the authenticated user

    // If the authenticated user is an ELDER and elderId is not provided, default to self
    let elderId = createBookingDto.elderId;
    if (!elderId && user.role === 'ELDER') {
      elderId = user.id;
    }

    // If the booker is a RELATIVE, elderId must be provided explicitly
    if (user.role === 'RELATIVE' && !elderId) {
      throw new BadRequestException(
        'elderId is required when the booker is a RELATIVE.'
      );
    }

    return this.bookingService.createBooking({
      ...createBookingDto,
      bookerId,
      elderId: elderId as string,
    });
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
