import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConversationDto } from './dto';
import { USER_SERVICE_NAME, User, UserServiceClient } from 'types/proto/auth';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ConversationService implements OnModuleInit {
  private userService: UserServiceClient;
  constructor(
    private readonly prisma: PrismaService,
    @Inject(USER_SERVICE_NAME) private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  async getUserConversations(userId: string, search?: string) {
    const conversations = await this.prisma.conversation.findMany({
      where: {
        OR: [{ initiatorId: userId }, { recipientId: userId }],
      },
      include: {
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' }, // last message
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!conversations.length) {
      return [];
    }

    // Get all unique participant IDs
    const userIds = conversations.reduce((ids, conv) => {
      ids.add(conv.initiatorId);
      ids.add(conv.recipientId);
      return ids;
    }, new Set<string>());

    // Fetch user data from the auth service
    const { users } = await this.userService
      .getUsersByIds({ userIds: Array.from(userIds) })
      .toPromise();

    const usersMap = new Map<string, User>(
      users.map((user) => [user.id, user])
    );

    // Map user data to conversations
    let conversationsWithUsers = conversations.map((conv) => ({
      ...conv,
      initiator: usersMap.get(conv.initiatorId),
      recipient: usersMap.get(conv.recipientId),
    }));

    // Filter by participant name (if provided)
    if (search) {
      conversationsWithUsers = conversationsWithUsers.filter((conv) => {
        const otherUser =
          conv.initiatorId === userId ? conv.recipient : conv.initiator;
        if (!otherUser) return false;

        const fullName = `${otherUser.firstName ?? ''} ${
          otherUser.lastName ?? ''
        }`.trim();
        return fullName.toLowerCase().includes(search.toLowerCase());
      });
    }

    return conversationsWithUsers;
  }

  async createConversation(initiatorId: string, dto: CreateConversationDto) {
    if (initiatorId === dto.recipientId) {
      throw new BadRequestException(
        'Cannot start a conversation with yourself'
      );
    }

    // Check if conversation already exists (both directions)
    const existing = await this.prisma.conversation.findFirst({
      where: {
        OR: [
          { initiatorId: initiatorId, recipientId: dto.recipientId },
          { initiatorId: dto.recipientId, recipientId: initiatorId },
        ],
      },
    });

    if (existing) return existing;

    return this.prisma.conversation.create({
      data: {
        initiatorId: initiatorId,
        recipientId: dto.recipientId,
      },
    });
  }

  async deleteConversation(userId: string, otherUserId: string) {
    const conversation = await this.prisma.conversation.findFirst({
      where: {
        OR: [
          { initiatorId: userId, recipientId: otherUserId },
          { initiatorId: otherUserId, recipientId: userId },
        ],
      },
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }

    return this.prisma.conversation.delete({
      where: { id: conversation.id },
    });
  }

  async getConversationById(conversationId: string, userId: string) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    // Ensure user is part of this conversation
    if (
      conversation.initiatorId !== userId &&
      conversation.recipientId !== userId
    ) {
      throw new BadRequestException('Access denied');
    }

    // Fetch user data from the auth service
    const { users } = await this.userService
      .getUsersByIds({
        userIds: [conversation.initiatorId, conversation.recipientId],
      })
      .toPromise();

    const usersMap = new Map<string, User>(
      users.map((user) => [user.id, user])
    );

    return {
      ...conversation,
      initiator: usersMap.get(conversation.initiatorId),
      recipient: usersMap.get(conversation.recipientId),
    };
  }

  async getConversationMessages(conversationId: string, userId: string) {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    if (
      conversation.initiatorId !== userId &&
      conversation.recipientId !== userId
    ) {
      throw new BadRequestException('Access denied');
    }

    return this.prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
    });
  }
}
