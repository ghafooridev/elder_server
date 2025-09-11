import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { REMINDER_STATUS, REMINDER_TYPE } from '@prisma-clients/reminder';

export class Reminder {
  @ApiProperty({
    description: 'Unique identifier of the reminder',
    example: 'a1b2c3d4',
  })
  readonly id: string;

  @ApiPropertyOptional({
    description: 'Title of the reminder',
    example: 'Take morning medicine',
  })
  title: string;

  @ApiPropertyOptional({
    description: 'Description of the reminder',
    example: 'Take 2 pills after breakfast',
  })
  description: string | null;

  @ApiProperty({
    enum: REMINDER_STATUS,
    description: 'Current status of the reminder',
    example: REMINDER_STATUS.PENDING,
  })
  status: REMINDER_STATUS;

  @ApiProperty({
    enum: REMINDER_TYPE,
    description: 'Type/category of the reminder',
    example: REMINDER_TYPE.MEDICINE,
  })
  type: REMINDER_TYPE;

  @ApiPropertyOptional({
    description: 'Scheduled date and time of the reminder',
    type: String,
    format: 'date-time',
    example: '2025-09-07T08:00:00Z',
  })
  date: Date | null;

  @ApiProperty({
    description: 'Indicates if the reminder is enabled',
    example: true,
  })
  enabled: boolean;

  @ApiProperty({
    description: 'ID of the user associated with this reminder',
    example: 'u12345',
  })
  userId: string;

  @ApiProperty({
    description: 'Date when the reminder was created',
    type: String,
    format: 'date-time',
    example: '2025-09-04T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the reminder was last updated',
    type: String,
    format: 'date-time',
    example: '2025-09-04T13:00:00Z',
  })
  updatedAt: Date;
}
