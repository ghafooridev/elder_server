import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { REMINDER_STATUS, REMINDER_TYPE } from '@prisma-clients/reminder';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateReminderDto {
  @ApiPropertyOptional({
    description: 'Title of the reminder',
    example: 'Take morning medicine',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Description of the reminder',
    example: 'Take 2 pills after breakfast',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Status of the reminder',
    enum: REMINDER_STATUS,
    example: REMINDER_STATUS.PENDING,
  })
  @IsOptional()
  @IsEnum(REMINDER_STATUS)
  status?: REMINDER_STATUS;

  @ApiPropertyOptional({
    description: 'Type/category of the reminder',
    enum: REMINDER_TYPE,
    example: REMINDER_TYPE.MEDICINE,
  })
  @IsOptional()
  @IsEnum(REMINDER_TYPE)
  type?: REMINDER_TYPE;

  @ApiPropertyOptional({
    description: 'Scheduled date and time of the reminder',
    type: String,
    format: 'date-time',
    example: '2025-09-07T08:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  date?: Date;

  @ApiPropertyOptional({
    description: 'Indicates if the reminder is enabled',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  enabled?: boolean;

  @ApiProperty({
    description: 'ID of the user associated with this reminder',
    example: 'u12345',
  })
  @IsString()
  userId: string;
}
