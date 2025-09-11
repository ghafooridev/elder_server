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
    if (!data.userId) {
      throw new BadRequestException('userId is required');
    }

    const createData: any = {
      title: data.title,
      description: data.description,
      status: data.status,
      type: data.type,
      enabled: data.enabled ?? true,
      userId: data.userId,
    };

    if (data.date) {
      const dateValue = new Date(data.date as any);
      if (isNaN(dateValue.getTime())) {
        throw new BadRequestException('date must be a valid ISO date-time');
      }
      createData.date = dateValue;
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

    const updateData: any = {
      title: data.title,
      description: data.description,
      status: data.status,
      type: data.type,
      enabled: data.enabled,
    };

    if (data.date) {
      const dateValue = new Date(data.date as any);
      if (isNaN(dateValue.getTime())) {
        throw new BadRequestException('date must be a valid ISO date-time');
      }
      updateData.date = dateValue;
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
