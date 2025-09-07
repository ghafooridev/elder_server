import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsDateString,
} from 'class-validator';
import { REMINDER_STATUS, REMINDER_TYPE } from '@prisma-clients/reminder';

export class UpdateReminderDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(REMINDER_STATUS)
  status?: REMINDER_STATUS;

  @IsOptional()
  @IsEnum(REMINDER_TYPE)
  type?: REMINDER_TYPE;

  @IsOptional()
  @IsDateString()
  date?: Date;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;
}
