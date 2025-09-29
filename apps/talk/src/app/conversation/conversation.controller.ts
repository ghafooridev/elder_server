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
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto';
import { AuthGuard } from '@elder/nestjs';
import { User } from 'types/proto/auth';
import {
  ApiCreateConversationDocs,
  ApiGetUserConversationsDocs,
  ApiGetConversationByIdDocs,
  ApiGetConversationMessagesDocs,
  ApiDeleteConversationDocs,
} from './api-doc/conversation.swagger';

@ApiTags('conversations')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  @ApiCreateConversationDocs()
  async createConversation(
    @Body() dto: CreateConversationDto,
    @Req() req: { user: User }
  ) {
    return this.conversationService.createConversation(req.user.id, dto);
  }

  @Get()
  @ApiGetUserConversationsDocs()
  async getUserConversations(
    @Req() { user }: { user: User },
    @Query('search') search?: string
  ) {
    return this.conversationService.getUserConversations(user.id, search);
  }

  @Get(':conversationId')
  @ApiGetConversationByIdDocs()
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
  @ApiGetConversationMessagesDocs()
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
  @ApiDeleteConversationDocs()
  async deleteConversation(
    @Req() { user }: { user: User },
    @Param('otherUserId') otherUserId: string
  ) {
    return this.conversationService.deleteConversation(user.id, otherUserId);
  }
}
