import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateReminderDto } from '../dto/create-reminder.dto';
import { UpdateReminderDto } from '../dto/update-reminder.dto';
import { Reminder } from '../reminder.model';

export function ApiCreateReminderDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new reminder' }),
    ApiResponse({
      status: 201,
      description: 'Reminder created successfully',
      type: CreateReminderDto,
    })
  );
}

export function ApiUpdateReminderDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing reminder' }),
    ApiResponse({
      status: 200,
      description: 'Reminder updated successfully',
      type: UpdateReminderDto,
    })
  );
}

export function ApiDeleteReminderDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a reminder by ID' }),
    ApiResponse({ status: 200, description: 'Reminder deleted successfully' })
  );
}

export function ApiGetAllRemindersDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all reminders' }),
    ApiQuery({
      name: 'status',
      enum: ['PENDING', 'COMPLETED', 'MISSED'],
      required: false,
      description: 'Filter reminders by status',
    }),
    ApiResponse({
      status: 200,
      description: 'List of reminders',
      type: [Reminder],
    })
  );
}
