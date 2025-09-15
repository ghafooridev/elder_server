import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MessageService } from './message.service';
import { CreateMessageDto, UpdateMessageDto } from './dto';
import { MessageStatus } from '@prisma-clients/talk';

@ApiTags('messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @ApiOperation({ summary: 'Send a new message' })
  @ApiResponse({ status: 201, description: 'Message sent successfully' })
  async sendMessage(@Body() dto: CreateMessageDto) {
    return this.messageService.sendMessage(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit a message (content or attachment)' })
  @ApiResponse({ status: 200, description: 'Message updated successfully' })
  async editMessage(
    @Param('id') messageId: string,
    @Query('userId') userId: string,
    @Body() dto: UpdateMessageDto
  ) {
    return this.messageService.editMessage(messageId, dto, userId);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update the status of a message' })
  @ApiResponse({
    status: 200,
    description: 'Message status updated successfully',
  })
  async updateMessageStatus(
    @Param('id') messageId: string,
    @Body('status') status: MessageStatus
  ) {
    return this.messageService.updateMessageStatus(messageId, status);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a message' })
  @ApiResponse({ status: 200, description: 'Message deleted successfully' })
  async deleteMessage(
    @Param('id') messageId: string,
    @Query('userId') userId: string
  ) {
    return this.messageService.deleteMessage(messageId, userId);
  }
}
