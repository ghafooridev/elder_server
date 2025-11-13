import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
  OnModuleInit,
  forwardRef,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConversationDto } from './dto';
import { USER_SERVICE_NAME, User, UserServiceClient } from 'types/proto/auth';
import { ClientGrpc } from '@nestjs/microservices';
import { TalkGateway } from '../websocket/websocket.gateway';

@Injectable()
export class ConversationService implements OnModuleInit {
  private userService: UserServiceClient;
  constructor(
    private readonly prisma: PrismaService,
    @Inject(USER_SERVICE_NAME) private readonly client: ClientGrpc,
    @Inject(forwardRef(() => TalkGateway))
    private readonly talkGateway: TalkGateway
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

    // Calculate unread counts for each conversation
    const unreadCounts = await Promise.all(
      conversations.map(async (conv) => {
        const count = await this.prisma.message.count({
          where: {
            conversationId: conv.id,
            receiverId: userId,
            status: {
              not: 'SEEN',
            },
          },
        });
        return { conversationId: conv.id, unreadCount: count };
      })
    );

    const unreadCountMap = new Map(
      unreadCounts.map((item) => [item.conversationId, item.unreadCount])
    );

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

    // Map user data to conversations and add unreadCount
    let conversationsWithUsers = conversations.map((conv) => ({
      ...conv,
      initiator: usersMap.get(conv.initiatorId),
      recipient: usersMap.get(conv.recipientId),
      unreadCount: unreadCountMap.get(conv.id) || 0,
      latestMessage: conv.messages[0] || null,
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
      include: {
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (existing) {
      // Fetch user data for consistency
      const { users } = await this.userService
        .getUsersByIds({
          userIds: [existing.initiatorId, existing.recipientId],
        })
        .toPromise();

      const usersMap = new Map<string, User>(
        users.map((user) => [user.id, user])
      );

      return {
        ...existing,
        initiator: usersMap.get(existing.initiatorId),
        recipient: usersMap.get(existing.recipientId),
      };
    }

    const conversation = await this.prisma.conversation.create({
      data: {
        initiatorId: initiatorId,
        recipientId: dto.recipientId,
      },
      include: {
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    // Fetch user data for the conversation
    const { users } = await this.userService
      .getUsersByIds({
        userIds: [conversation.initiatorId, conversation.recipientId],
      })
      .toPromise();

    const usersMap = new Map<string, User>(
      users.map((user) => [user.id, user])
    );

    const conversationWithUsers = {
      ...conversation,
      initiator: usersMap.get(conversation.initiatorId),
      recipient: usersMap.get(conversation.recipientId),
    };

    // Emit WebSocket event to both participants
    this.talkGateway.sendToUser(
      conversation.initiatorId,
      'conversationCreated',
      { conversation: conversationWithUsers }
    );
    this.talkGateway.sendToUser(
      conversation.recipientId,
      'conversationCreated',
      { conversation: conversationWithUsers }
    );

    return conversationWithUsers;
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

    const deletedConversation = await this.prisma.conversation.delete({
      where: { id: conversation.id },
    });

    // Emit WebSocket event to both participants
    this.talkGateway.sendToUser(userId, 'conversationDeleted', {
      conversationId: deletedConversation.id,
      deletedBy: userId,
    });
    this.talkGateway.sendToUser(otherUserId, 'conversationDeleted', {
      conversationId: deletedConversation.id,
      deletedBy: userId,
    });

    return deletedConversation;
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
