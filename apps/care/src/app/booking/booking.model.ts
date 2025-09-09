import { ApiProperty } from '@nestjs/swagger';
import { BookingStatus } from '@prisma-clients/care';

export class Booking {
  @ApiProperty({
    description: 'Unique identifier of the booking',
    example: 'b12345',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Current status of the booking',
    enum: BookingStatus,
    example: BookingStatus.PENDING,
  })
  status: BookingStatus;

  @ApiProperty({
    description: 'Date and time when the booking is scheduled',
    type: String,
    format: 'date-time',
    example: '2025-09-07T10:00:00Z',
  })
  scheduledAt: Date;

  @ApiProperty({
    description: 'ID of the care associated with this booking',
    example: 'c12345',
  })
  careId: string;

  @ApiProperty({
    description: 'ID of the client who made the booking',
    example: 'u12345',
  })
  clientId: string;

  @ApiProperty({
    description: 'Date when the booking was created',
    type: String,
    format: 'date-time',
    example: '2025-09-04T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the booking was last updated',
    type: String,
    format: 'date-time',
    example: '2025-09-04T13:00:00Z',
  })
  updatedAt: Date;
}
