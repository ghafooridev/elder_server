import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto, UpdateMessageDto } from './dto';
import { Message, MessageStatus } from '@prisma-clients/talk';
import { TalkGateway } from '../websocket/websocket.gateway';

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => TalkGateway))
    private readonly talkGateway: TalkGateway
  ) {}

  async sendMessage(dto: CreateMessageDto): Promise<Message> {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: dto.conversationId },
    });
    if (!conversation) throw new NotFoundException('Conversation not found');

    const message = await this.prisma.message.create({
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

    // Emit WebSocket event to all users in the conversation room
    this.talkGateway.sendToConversation(dto.conversationId, 'newMessage', {
      message,
      conversationId: dto.conversationId,
    });

    // Send delivery confirmation to sender
    this.talkGateway.sendToUser(dto.senderId, 'messageDelivered', {
      messageId: message.id,
    });

    return message;
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

    const updatedMessage = await this.prisma.message.update({
      where: { id: messageId },
      data: {
        content: dto.content ?? message.content,
        attachmentUrl: dto.attachmentUrl ?? message.attachmentUrl,
      },
    });

    // Emit WebSocket event to all users in the conversation room
    this.talkGateway.sendToConversation(
      message.conversationId,
      'messageUpdated',
      {
        message: updatedMessage,
        conversationId: message.conversationId,
      }
    );

    return updatedMessage;
  }

  async updateMessageStatus(
    messageId: string,
    status: MessageStatus,
    userId?: string
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

    const updatedMessage = await this.prisma.message.update({
      where: { id: messageId },
      data: { status },
    });

    // Emit WebSocket event to notify the message sender about status update
    if (userId) {
      const statusMap = {
        DELIVERED: 'delivered',
        SEEN: 'seen',
      } as const;

      this.talkGateway.sendToUser(message.senderId, 'messageStatusUpdated', {
        messageId: messageId,
        status: statusMap[status],
        updatedBy: userId,
      });
    }

    return updatedMessage;
  }

  async deleteMessage(messageId: string, userId: string): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    if (message.senderId !== userId) {
      throw new BadRequestException('You can only delete your own messages');
    }

    const deletedMessage = await this.prisma.message.delete({
      where: { id: messageId },
    });

    // Emit WebSocket event to all users in the conversation room
    this.talkGateway.sendToConversation(
      message.conversationId,
      'messageDeleted',
      {
        messageId: messageId,
        conversationId: message.conversationId,
      }
    );

    return deletedMessage;
  }

  async deleteMessageById(messageId: string): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');

    const deletedMessage = await this.prisma.message.delete({
      where: { id: messageId },
    });

    // Emit WebSocket event to all users in the conversation room
    this.talkGateway.sendToConversation(
      message.conversationId,
      'messageDeleted',
      {
        messageId: messageId,
        conversationId: message.conversationId,
      }
    );

    return deletedMessage;
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

    const updatedMessage = await this.prisma.message.update({
      where: { id: data.messageId },
      data: {
        content: data.content ?? message.content,
        attachmentUrl: data.attachmentUrl ?? message.attachmentUrl,
      },
    });

    // Emit WebSocket event to all users in the conversation room
    this.talkGateway.sendToConversation(
      message.conversationId,
      'messageUpdated',
      {
        message: updatedMessage,
        conversationId: message.conversationId,
      }
    );

    return updatedMessage;
  }

  async findMessageById(messageId: string): Promise<Message> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });
    if (!message) throw new NotFoundException('Message not found');
    return message;
  }
}
