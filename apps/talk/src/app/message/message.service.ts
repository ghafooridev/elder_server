import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto, UpdateMessageDto } from './dto';
import { Message, MessageStatus } from '@prisma-clients/talk';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async sendMessage(dto: CreateMessageDto): Promise<Message> {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: dto.conversationId },
    });
    if (!conversation) throw new NotFoundException('Conversation not found');

    return this.prisma.message.create({
      data: {
        conversationId: dto.conversationId,
        senderId: dto.senderId,
        receiverId: dto.receiverId,
        content: dto.content,
        attachmentUrl: dto.attachmentUrl,
        messageType: dto.messageType,
        status: MessageStatus.SENT,
      },
    });
  }

  async editMessage(
    messageId: string,
    dto: UpdateMessageDto,
    userId: string
  ): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    if (message.senderId !== userId) {
      throw new BadRequestException('You can only edit your own messages');
    }

    return this.prisma.message.update({
      where: { id: messageId },
      data: {
        content: dto.content ?? message.content,
        attachmentUrl: dto.attachmentUrl ?? message.attachmentUrl,
      },
    });
  }

  async updateMessageStatus(
    messageId: string,
    status: MessageStatus
  ): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    // Optional: prevent invalid status transitions
    const validTransitions: Record<MessageStatus, MessageStatus[]> = {
      SENT: [MessageStatus.DELIVERED, MessageStatus.SEEN],
      DELIVERED: [MessageStatus.SEEN],
      SEEN: [],
    };

    if (!validTransitions[message.status].includes(status)) {
      throw new BadRequestException(
        `Cannot change status from ${message.status} to ${status}`
      );
    }

    return this.prisma.message.update({
      where: { id: messageId },
      data: { status },
    });
  }

  async deleteMessage(messageId: string, userId: string): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    if (message.senderId !== userId) {
      throw new BadRequestException('You can only delete your own messages');
    }

    return this.prisma.message.delete({ where: { id: messageId } });
  }

  async deleteMessageById(messageId: string): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    return this.prisma.message.delete({ where: { id: messageId } });
  }

  async updateMessage(data: {
    messageId: string;
    content?: string;
    attachmentUrl?: string;
  }): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: data.messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    return this.prisma.message.update({
      where: { id: data.messageId },
      data: {
        content: data.content ?? message.content,
        attachmentUrl: data.attachmentUrl ?? message.attachmentUrl,
      },
    });
  }

  async findMessageById(messageId: string): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');
    return message;
  }
}
