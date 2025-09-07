import { RemindersService } from './reminder.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder } from './reminder.model';
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
// import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import {
  ApiCreateReminderDocs,
  ApiUpdateReminderDocs,
  ApiDeleteReminderDocs,
  ApiGetAllRemindersDocs,
} from './doc/reminder.swagger';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: RemindersService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiCreateReminderDocs()
  async createReminder(
    @Body() createReminderDto: CreateReminderDto
  ): Promise<Reminder> {
    return this.reminderService.createReminder(createReminderDto);
  }

  @Patch(':reminderId')
  // @UseGuards(JwtAuthGuard)
  @ApiUpdateReminderDocs()
  async update(
    @Param('reminderId') reminderId: string,
    @Body() updateReminderDto: UpdateReminderDto
  ): Promise<Reminder> {
    return this.reminderService.updateReminder(reminderId, updateReminderDto);
  }

  @Delete(':reminderId')
  // @UseGuards(JwtAuthGuard)
  @ApiDeleteReminderDocs()
  async delete(
    @Param('reminderId') reminderId: string
  ): Promise<{ message: string }> {
    await this.reminderService.deleteReminder(reminderId);
    return { message: 'Reminder deleted successfully' };
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @ApiGetAllRemindersDocs()
  async getAll(): Promise<Reminder[]> {
    return this.reminderService.getReminders();
  }
}
