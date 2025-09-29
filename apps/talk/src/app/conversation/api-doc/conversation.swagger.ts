import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateConversationDto } from '../dto';

export function ApiCreateConversationDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Create a new conversation' }),
    ApiBody({ type: CreateConversationDto }),
    ApiResponse({
      status: 201,
      description: 'Conversation created successfully',
    })
  );
}

export function ApiGetUserConversationsDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({
      summary:
        'Get all conversations for a user (optionally filter by participant name)',
    }),
    ApiQuery({
      name: 'search',
      required: false,
      type: String,
      description: 'Search by participant name',
    }),
    ApiResponse({
      status: 200,
      description: 'Conversations retrieved successfully',
    })
  );
}

export function ApiGetConversationByIdDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Get a specific conversation by ID' }),
    ApiParam({
      name: 'conversationId',
      type: String,
      description: 'Conversation ID',
    }),
    ApiResponse({
      status: 200,
      description: 'Conversation retrieved successfully',
    })
  );
}

export function ApiGetConversationMessagesDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Get all messages inside a conversation' }),
    ApiParam({
      name: 'conversationId',
      type: String,
      description: 'Conversation ID',
    }),
    ApiResponse({ status: 200, description: 'Messages retrieved successfully' })
  );
}

export function ApiDeleteConversationDocs() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({
      summary:
        'Delete a conversation between the logged-in user and another user',
    }),
    ApiParam({
      name: 'otherUserId',
      type: String,
      description: 'Other participant user ID',
    }),
    ApiResponse({
      status: 200,
      description: 'Conversation deleted successfully',
    })
  );
}
