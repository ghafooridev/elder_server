import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BookingStatus } from '@prisma-clients/care';
import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({
    description: 'ID of the care to book',
    example: 'c12345',
  })
  @IsString()
  careId: string;

  @ApiPropertyOptional({
    description:
      'ID of the elder receiving the care. If omitted and the authenticated user is an ELDER, it will be derived from the token.',
    example: 'u12345',
  })
  @IsOptional()
  @IsString()
  elderId?: string;

  @ApiPropertyOptional({
    description:
      'ID of the user making the booking. If omitted, it will be derived from the token.',
    example: 'u67890',
  })
  @IsOptional()
  @IsString()
  bookerId?: string;

  @ApiProperty({
    description: 'Date and time when the booking is scheduled',
    type: String,
    format: 'date-time',
    example: '2025-09-07T10:00:00Z',
  })
  @IsDateString()
  scheduledAt: Date;

  @ApiPropertyOptional({
    description: 'Status of the booking',
    enum: BookingStatus,
    example: BookingStatus.PENDING,
  })
  @IsOptional()
  @IsEnum(BookingStatus)
  status?: BookingStatus;
}
