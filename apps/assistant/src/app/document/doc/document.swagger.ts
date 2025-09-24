import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Document } from '../document.model';

export function ApiCreateDocumentDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new document' }),
    ApiResponse({
      status: 201,
      description: 'Document created successfully',
      type: Document,
    })
  );
}

export function ApiUpdateDocumentDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing document' }),
    ApiResponse({
      status: 200,
      description: 'Document updated successfully',
      type: Document,
    })
  );
}

export function ApiDeleteDocumentDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a document by ID' }),
    ApiResponse({ status: 200, description: 'Document deleted successfully' })
  );
}

export function ApiGetAllDocumentDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all documents' }),
    ApiResponse({
      status: 200,
      description: 'List of documents',
      type: [Document],
    })
  );
}

export function ApiGetDocumentDocsById() {
  return applyDecorators(
    ApiOperation({ summary: 'Get a document by ID' }),
    ApiResponse({
      status: 200,
      description: 'Document found successfully',
      type: Document,
    })
  );
}
