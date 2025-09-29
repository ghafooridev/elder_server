import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Booking } from '../booking.model';

export function ApiCreateBookingDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new booking' }),
    ApiResponse({
      status: 201,
      description: 'Booking created successfully',
      type: Booking, // usually we return the created entity, not the DTO
    })
  );
}

export function ApiUpdateBookingDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing booking' }),
    ApiResponse({
      status: 200,
      description: 'Booking updated successfully',
      type: Booking,
    })
  );
}

export function ApiDeleteBookingDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a booking by ID' }),
    ApiResponse({ status: 200, description: 'Booking deleted successfully' })
  );
}

export function ApiGetAllBookingsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all bookings' }),
    ApiResponse({
      status: 200,
      description: 'List of bookings',
      type: [Booking],
    })
  );
}
