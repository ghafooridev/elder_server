import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './booking.model';
import { AUTH_PACKAGE_NAME, UserServiceClient } from 'types/proto/auth';
import {
  REMINDER_PACKAGE_NAME,
  ReminderServiceClient,
} from 'types/proto/reminder';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { BookingStatus } from '@prisma-clients/care';

@Injectable()
export class BookingService implements OnModuleInit {
  private userService: UserServiceClient;
  private reminderService: ReminderServiceClient;

  constructor(
    private readonly prisma: PrismaService,
    @Inject(AUTH_PACKAGE_NAME) private client: ClientGrpc,
    @Inject(REMINDER_PACKAGE_NAME) private reminderClient: ClientGrpc
  ) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceClient>('UserService');
    this.reminderService =
      this.reminderClient.getService<ReminderServiceClient>('ReminderService');
  }

  async createBooking(data: CreateBookingDto): Promise<Booking> {
    const { elderId, bookerId, scheduledAt } = data;

    // Validate scheduledAt presence and correctness (schema requires non-null)
    if (!scheduledAt) {
      throw new BadRequestException('scheduledAt is required');
    }
    const scheduledAtDate = new Date(scheduledAt as any);
    if (isNaN(scheduledAtDate.getTime())) {
      throw new BadRequestException(
        'scheduledAt must be a valid ISO date-time'
      );
    }

    const [elderValidation, bookerValidation] = await Promise.all([
      firstValueFrom(
        this.userService.validateUser({ userId: elderId, role: 'ELDER' })
      ),
      firstValueFrom(
        this.userService.validateUser({ userId: bookerId, role: '' })
      ),
    ]);

    if (!elderValidation?.isValid) {
      throw new BadRequestException(
        'Invalid elder ID or user is not an elder.'
      );
    }

    if (!bookerValidation?.isValid) {
      throw new BadRequestException('Invalid booker ID.');
    }

    const bookerRole = bookerValidation.user.role;
    if (bookerRole !== 'ELDER' && bookerRole !== 'RELATIVE') {
      throw new BadRequestException(
        'Only elders or their relatives can make a booking.'
      );
    }

    const booking = await this.prisma.booking.create({
      data: {
        careId: data.careId,
        elderId: elderId as string,
        bookerId: bookerId as string,
        scheduledAt: scheduledAtDate,
        status: (data.status ?? BookingStatus.PENDING) as BookingStatus,
      },
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

  async updateBookingStatus(
    bookingId: string,
    caregiverId: string,
    status: BookingStatus
  ): Promise<Booking> {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { care: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.care.caregiverId !== caregiverId) {
      throw new BadRequestException(
        'You are not authorized to update this booking.'
      );
    }

    return this.prisma.booking.update({
      where: { id: bookingId },
      data: { status },
    });
  }

  async addReminder(bookingId: string, userId: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { care: true },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    if (booking.bookerId !== userId && booking.elderId !== userId) {
      throw new BadRequestException(
        'You are not authorized to create a reminder for this booking.'
      );
    }

    return firstValueFrom(
      this.reminderService.createReminder({
        userId,
        title: booking.care.title,
        description: `Reminder for your booking: ${booking.care.description}`,
        scheduledAt: booking.scheduledAt.toISOString(),
      })
    );
  }

  async getBookings(filters: {
    caregiverId?: string;
    bookerId?: string;
    elderId?: string;
  }): Promise<Booking[]> {
    const { caregiverId, bookerId, elderId } = filters;
    const where: any = {};

    if (caregiverId) {
      where.care = { caregiverId };
    }

    if (bookerId || elderId) {
      where.OR = [];
      if (bookerId) {
        where.OR.push({ bookerId });
      }
      if (elderId) {
        where.OR.push({ elderId });
      }
    }

    return this.prisma.booking.findMany({
      where,
      include: {
        care: true,
      },
    });
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

  async getBooking(id: string): Promise<Booking> {
    const booking = await this.prisma.booking.findUnique({ where: { id } });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }
}
