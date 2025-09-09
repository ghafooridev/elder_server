import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsDateString } from 'class-validator';
import { BookingStatus } from '@prisma-clients/care';

export class UpdateBookingDto {
  @ApiPropertyOptional({
    description: 'Updated status of the booking',
    enum: BookingStatus,
    example: BookingStatus.CONFIRMED,
  })
  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;

  @ApiPropertyOptional({
    description: 'Updated scheduled date and time of the booking',
    type: String,
    format: 'date-time',
    example: '2025-09-08T14:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  scheduledAt?: Date;
}
