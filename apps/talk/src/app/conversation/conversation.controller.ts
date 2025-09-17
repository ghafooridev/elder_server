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
import { User } from 'types/proto/auth';

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
    @Req() req: { user: User }
  ) {
    return this.conversationService.createConversation(req.user.id, dto);
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
  @UseGuards(AuthGuard)
  async getUserConversations(
    @Req() { user }: { user: User },
    @Query('search') search?: string
  ) {
    return this.conversationService.getUserConversations(user.id, search);
  }

  @Get(':conversationId')
  @ApiOperation({ summary: 'Get a specific conversation by ID' })
  @ApiResponse({
    status: 200,
    description: 'Conversation retrieved successfully',
  })
  @UseGuards(AuthGuard)
  async getConversationById(
    @Param('conversationId') conversationId: string,
    @Req() { user }: { user: User }
  ) {
    return this.conversationService.getConversationById(
      conversationId,
      user.id
    );
  }

  @Get(':conversationId/messages')
  @ApiOperation({ summary: 'Get all messages inside a conversation' })
  @ApiResponse({ status: 200, description: 'Messages retrieved successfully' })
  @UseGuards(AuthGuard)
  async getConversationMessages(
    @Param('conversationId') conversationId: string,
    @Req() { user }: { user: User }
  ) {
    return this.conversationService.getConversationMessages(
      conversationId,
      user.id
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
  @UseGuards(AuthGuard)
  async deleteConversation(
    @Req() { user }: { user: any },
    @Param('otherUserId') otherUserId: string
  ) {
    return this.conversationService.deleteConversation(user.id, otherUserId);
  }
}
