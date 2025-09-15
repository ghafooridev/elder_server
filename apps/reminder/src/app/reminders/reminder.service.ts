import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReminderDto, UpdateReminderDto } from './dto';
import { Reminder } from './reminder.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class RemindersService {
  constructor(private readonly prisma: PrismaService) {}

  async createReminder(data: CreateReminderDto): Promise<Reminder> {
    if (!data.userId) {
      throw new BadRequestException('userId is required');
    }

    const { date, ...restData } = data;

    const createData = {
      ...restData,
      userId: data.userId,
      enabled: data.enabled ?? true,
    };

    if (date) {
      const dateValue = new Date(date);
      if (isNaN(dateValue.getTime())) {
        throw new BadRequestException('date must be a valid ISO date-time');
      }
      createData['date'] = dateValue;
    }

    const reminder = await this.prisma.reminder.create({
      data: createData,
    });

    return reminder;
  }

  async updateReminder(id: string, data: UpdateReminderDto): Promise<Reminder> {
    if (!id) {
      throw new BadRequestException('Reminder ID is required');
    }

    const reminder = await this.prisma.reminder.findUnique({ where: { id } });

    if (!reminder) {
      throw new NotFoundException('Reminder not found');
    }

    const { date, ...restData } = data;
    const updateData = { ...restData };

    if (date) {
      const dateValue = new Date(date);
      if (isNaN(dateValue.getTime())) {
        throw new BadRequestException('date must be a valid ISO date-time');
      }
      updateData['date'] = dateValue;
    }

    const updatedReminder = await this.prisma.reminder.update({
      where: { id },
      data: updateData,
    });

    return updatedReminder;
  }

  async deleteReminder(id: string): Promise<{ message: string }> {
    if (!id) {
      throw new BadRequestException('Reminder ID is required');
    }

    const reminder = await this.prisma.reminder.findUnique({ where: { id } });

    if (!reminder) {
      throw new NotFoundException('Reminder not found');
    }

    await this.prisma.reminder.delete({ where: { id } });

    return { message: 'Reminder deleted successfully' };
  }

  async getReminders(userId: string): Promise<Reminder[]> {
    return this.prisma.reminder.findMany({ where: { userId } });
  }

  async getReminder(id: string): Promise<Reminder> {
    const reminder = await this.prisma.reminder.findUnique({ where: { id } });

    if (!reminder) {
      throw new NotFoundException('Reminder not found');
    }

    return reminder;
  }
}
