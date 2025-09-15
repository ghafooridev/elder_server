import { RemindersService } from './reminder.service';
import { CreateReminderDto, UpdateReminderDto } from './dto';
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
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@elder/nestjs'; //here from auth app
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
  @UseGuards(AuthGuard)
  @ApiCreateReminderDocs()
  async createReminder(
    @Body() createReminderDto: CreateReminderDto,
    @Req() req: any
  ): Promise<Reminder> {
    const userId = req.user?.id;
    return this.reminderService.createReminder({
      ...createReminderDto,
      userId,
    });
  }

  @Patch(':reminderId')
  @UseGuards(AuthGuard)
  @ApiUpdateReminderDocs()
  async update(
    @Param('reminderId') reminderId: string,
    @Body() updateReminderDto: UpdateReminderDto
  ): Promise<Reminder> {
    return this.reminderService.updateReminder(reminderId, updateReminderDto);
  }

  @Delete(':reminderId')
  @UseGuards(AuthGuard)
  @ApiDeleteReminderDocs()
  async delete(
    @Param('reminderId') reminderId: string
  ): Promise<{ message: string }> {
    await this.reminderService.deleteReminder(reminderId);
    return { message: 'Reminder deleted successfully' };
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiGetAllRemindersDocs()
  async getAll(@Req() req: any): Promise<Reminder[]> {
    const userId = req.user?.id;
    return this.reminderService.getReminders(userId);
  }
}
