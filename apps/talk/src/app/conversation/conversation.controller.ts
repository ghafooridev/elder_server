import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto';
import { AuthGuard } from '@elder/nestjs';
import { TokenPayload } from 'apps/auth/src/app/auth/types/auth.type';

@ApiTags('conversations')
@ApiBearerAuth()
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new conversation' })
  @ApiResponse({
    status: 201,
    description: 'Conversation created successfully',
  })
  @UseGuards(AuthGuard)
  async createConversation(
    @Body() dto: CreateConversationDto,
    @Req() { user }: { user: TokenPayload }
  ) {
    return this.conversationService.createConversation(user.userId, dto);
  }

  @Get()
  @ApiOperation({
    summary:
      'Get all conversations for a user (optionally filter by participant name)',
  })
  @ApiResponse({
    status: 200,
    description: 'Conversations retrieved successfully',
  })
  async getUserConversations(
    @Req() { user }: { user: TokenPayload },
    @Query('search') search?: string
  ) {
    return this.conversationService.getUserConversations(user.userId, search);
  }

  @Get(':conversationId')
  @ApiOperation({ summary: 'Get a specific conversation by ID' })
  @ApiResponse({
    status: 200,
    description: 'Conversation retrieved successfully',
  })
  async getConversationById(
    @Param('conversationId') conversationId: string,
    @Req() { user }: { user: TokenPayload }
  ) {
    return this.conversationService.getConversationById(
      conversationId,
      user.userId
    );
  }

  @Get(':conversationId/messages')
  @ApiOperation({ summary: 'Get all messages inside a conversation' })
  @ApiResponse({ status: 200, description: 'Messages retrieved successfully' })
  async getConversationMessages(
    @Param('conversationId') conversationId: string,
    @Req() { user }: { user: TokenPayload }
  ) {
    return this.conversationService.getConversationMessages(
      conversationId,
      user.userId
    );
  }

  @Delete(':otherUserId')
  @ApiOperation({
    summary:
      'Delete a conversation between the logged-in user and another user',
  })
  @ApiResponse({
    status: 200,
    description: 'Conversation deleted successfully',
  })
  async deleteConversation(
    @Req() { user }: { user: TokenPayload },
    @Param('otherUserId') otherUserId: string
  ) {
    return this.conversationService.deleteConversation(
      user.userId,
      otherUserId
    );
  }
}
