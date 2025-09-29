import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateMessageDto, UpdateMessageDto } from '../dto';
import { MessageStatus } from '@prisma-clients/talk';

export function ApiSendMessageDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Send a new message' }),
    ApiBody({ type: CreateMessageDto }),
    ApiResponse({ status: 201, description: 'Message sent successfully' })
  );
}

export function ApiEditMessageDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Edit a message (content or attachment)' }),
    ApiParam({ name: 'id', type: String, description: 'Message ID' }),
    ApiBody({ type: UpdateMessageDto }),
    ApiResponse({ status: 200, description: 'Message updated successfully' })
  );
}

export function ApiUpdateMessageStatusDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Update the status of a message' }),
    ApiParam({ name: 'id', type: String, description: 'Message ID' }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          status: { enum: Object.values(MessageStatus) },
        },
        required: ['status'],
      },
    }),
    ApiResponse({
      status: 200,
      description: 'Message status updated successfully',
    })
  );
}

export function ApiDeleteMessageDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Delete a message' }),
    ApiParam({ name: 'id', type: String, description: 'Message ID' }),
    ApiResponse({ status: 200, description: 'Message deleted successfully' })
  );
}
