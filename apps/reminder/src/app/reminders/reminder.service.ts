import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { Reminder } from './reminder.model';

@Injectable()
export class RemindersService {
  constructor(private readonly prisma: PrismaService) {}

  async createReminder(data: CreateReminderDto): Promise<Reminder> {
    const reminder = await this.prisma.reminder.create({
      data,
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

    const updatedReminder = await this.prisma.reminder.update({
      where: { id },
      data,
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

  async getReminders(): Promise<Reminder[]> {
    return this.prisma.reminder.findMany();
  }

  async getReminder(id: string): Promise<Reminder> {
    const reminder = await this.prisma.reminder.findUnique({ where: { id } });

    if (!reminder) {
      throw new NotFoundException('Reminder not found');
    }

    return reminder;
  }
}
