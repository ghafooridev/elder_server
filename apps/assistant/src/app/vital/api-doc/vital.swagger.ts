import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VitalModel } from '../vital.model';

export function ApiCreateVitalDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a vital parameter for an analysis' }),
    ApiResponse({ status: 201, description: 'Vital created', type: VitalModel })
  );
}

export function ApiBulkCreateVitalDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Bulk create vital parameters for an analysis' }),
    ApiResponse({
      status: 201,
      description: 'Vitals created',
      type: [VitalModel],
    })
  );
}

export function ApiGetVitalByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get a vital by ID' }),
    ApiResponse({ status: 200, description: 'Vital fetched', type: VitalModel })
  );
}

export function ApiGetVitalsByAnalysisDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'List vitals for an analysis' }),
    ApiResponse({ status: 200, description: 'Vitals list', type: [VitalModel] })
  );
}

export function ApiUpdateVitalDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update a vital by ID' }),
    ApiResponse({ status: 200, description: 'Vital updated', type: VitalModel })
  );
}

export function ApiDeleteVitalDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a vital by ID' }),
    ApiResponse({ status: 200, description: 'Vital deleted' })
  );
}
