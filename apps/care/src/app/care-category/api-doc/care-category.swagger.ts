import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CareCategory } from '../care-category.model';

export function ApiCreateCareCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new care category' }),
    ApiResponse({
      status: 201,
      description: 'Care category created successfully',
      type: CareCategory, // return the created entity
    })
  );
}

export function ApiUpdateCareCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing care category' }),
    ApiResponse({
      status: 200,
      description: 'Care category updated successfully',
      type: CareCategory,
    })
  );
}

export function ApiDeleteCareCategoryDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a care category by ID' }),
    ApiResponse({
      status: 200,
      description: 'Care category deleted successfully',
    })
  );
}

export function ApiGetAllCareCategoriesDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all care categories' }),
    ApiResponse({
      status: 200,
      description: 'List of care categories',
      type: [CareCategory],
    })
  );
}
