import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Care } from '../care.model';

export function ApiCreateCareDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new care' }),
    ApiResponse({
      status: 201,
      description: 'Care created successfully',
      type: Care, // usually we return the created entity, not the DTO
    })
  );
}

export function ApiUpdateCareDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing care' }),
    ApiResponse({
      status: 200,
      description: 'Care updated successfully',
      type: Care,
    })
  );
}

export function ApiDeleteCareDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a care by ID' }),
    ApiResponse({ status: 200, description: 'Care deleted successfully' })
  );
}

export function ApiGetAllCareDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all cares' }),
    ApiResponse({
      status: 200,
      description: 'List of cares',
      type: [Care],
    })
  );
}
