import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './booking.model';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  async createBooking(data: CreateBookingDto): Promise<Booking> {
    const booking = await this.prisma.booking.create({
      data,
    });

    return booking;
  }

  async updateBooking(id: string, data: UpdateBookingDto): Promise<Booking> {
    if (!id) {
      throw new BadRequestException('Booking ID is required');
    }

    const booking = await this.prisma.booking.findUnique({ where: { id } });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    const updatedBooking = await this.prisma.booking.update({
      where: { id },
      data,
    });

    return updatedBooking;
  }

  async deleteBooking(id: string): Promise<{ message: string }> {
    if (!id) {
      throw new BadRequestException('Booking ID is required');
    }

    const booking = await this.prisma.booking.findUnique({ where: { id } });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    await this.prisma.booking.delete({ where: { id } });

    return { message: 'Booking deleted successfully' };
  }

  async getBookings(): Promise<Booking[]> {
    return this.prisma.booking.findMany();
  }

  async getBooking(id: string): Promise<Booking> {
    const booking = await this.prisma.booking.findUnique({ where: { id } });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }
}
