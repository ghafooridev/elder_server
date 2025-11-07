import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MessageService } from './message.service';
import { CreateMessageDto, UpdateMessageDto } from './dto';
import { MessageStatus } from '@prisma-clients/talk';
import { AuthGuard } from '@elder/nestjs';
import { User } from 'types/proto/auth';
import {
  ApiSendMessageDocs,
  ApiEditMessageDocs,
  ApiUpdateMessageStatusDocs,
  ApiDeleteMessageDocs,
} from './api-doc/message.swagger';

@ApiTags('messages')
@ApiBearerAuth()
@Controller('messages')
@UseGuards(AuthGuard)
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @ApiSendMessageDocs()
  async sendMessage(
    @Body() dto: CreateMessageDto,
    @Req() { user }: { user: User }
  ) {
    // derive sender from auth
    dto.senderId = user.id;
    return this.messageService.sendMessage(dto);
  }

  @Patch(':id')
  @ApiEditMessageDocs()
  async editMessage(
    @Param('id') messageId: string,
    @Req() { user }: { user: User },
    @Body() dto: UpdateMessageDto
  ) {
    return this.messageService.editMessage(messageId, dto, user.id);
  }

  @Patch(':id/status')
  @ApiUpdateMessageStatusDocs()
  async updateMessageStatus(
    @Param('id') messageId: string,
    @Body('status') status: MessageStatus,
    @Req() { user }: { user: User }
  ) {
    return this.messageService.updateMessageStatus(messageId, status, user.id);
  }

  @Delete(':id')
  @ApiDeleteMessageDocs()
  async deleteMessage(
    @Param('id') messageId: string,
    @Req() { user }: { user: User }
  ) {
    return this.messageService.deleteMessage(messageId, user.id);
  }
}
