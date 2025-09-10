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

  @ApiProperty({
    description: 'ID of the elder receiving the care',
    example: 'u12345',
  })
  @IsString()
  elderId: string;

  @ApiProperty({
    description: 'ID of the user making the booking',
    example: 'u67890',
  })
  @IsString()
  bookerId: string;

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
