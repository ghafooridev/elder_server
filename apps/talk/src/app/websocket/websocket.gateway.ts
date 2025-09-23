import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {
  Logger,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { MessageService } from '../message/message.service';
import { ConversationService } from '../conversation/conversation.service';
import {
  JoinRoomDto,
  LeaveRoomDto,
  SendMessageDto,
  UpdateMessageDto,
  DeleteMessageDto,
  MessageStatusDto,
} from './dto';
import { WsAuthGuard } from '@elder/nestjs';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceClient,
} from 'types/proto/auth';
import { firstValueFrom } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/talk',
})
@UsePipes(new ValidationPipe())
export class TalkGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(TalkGateway.name);
  private connectedUsers = new Map<string, string>(); // socketId -> userId
  private userSockets = new Map<string, string>(); // userId -> socketId
  private authService: AuthServiceClient;

  constructor(
    private readonly messageService: MessageService,
    private readonly conversationService: ConversationService,
    @Inject(AUTH_PACKAGE_NAME) private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.authService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  async handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);

    try {
      // Extract token from query parameters or headers
      const token = this.extractTokenFromSocket(client);

      if (!token) {
        this.logger.warn(`Client ${client.id} connected without token`);
        client.disconnect();
        return;
      }

      // Authenticate user via auth service
      const user = await firstValueFrom(
        this.authService.authenticate({ token })
      );

      if (!user?.id) {
        this.logger.warn(`Client ${client.id} authentication failed`);
        client.disconnect();
        return;
      }

      // Store user data in socket
      client.data.user = user;
      const userId = user.id;

      this.connectedUsers.set(client.id, userId);
      this.userSockets.set(userId, client.id);

      // Notify others that user is online
      this.server.emit('userOnline', { userId, status: 'online' });
      this.logger.log(`User ${userId} connected with socket ${client.id}`);
    } catch (error) {
      this.logger.error(`Authentication error for client ${client.id}:`, error);
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    const userId = this.connectedUsers.get(client.id);

    if (userId) {
      this.connectedUsers.delete(client.id);
      this.userSockets.delete(userId);

      // Notify others that user is offline
      this.server.emit('userOffline', { userId, status: 'offline' });
      this.logger.log(`User ${userId} disconnected`);
    }

    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinRoom')
  @UseGuards(WsAuthGuard)
  async handleJoinRoom(
    @MessageBody() data: JoinRoomDto,
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Verify user has access to this conversation
      await this.conversationService.getConversationById(
        data.conversationId,
        data.userId
      );

      await client.join(data.conversationId);
      client.emit('joinedRoom', { conversationId: data.conversationId });

      this.logger.log(
        `User ${data.userId} joined conversation ${data.conversationId}`
      );
    } catch (error) {
      client.emit('error', { message: 'Failed to join room' });
      this.logger.error(`Failed to join room: ${error.message}`);
    }
  }

  @SubscribeMessage('leaveRoom')
  @UseGuards(WsAuthGuard)
  async handleLeaveRoom(
    @MessageBody() data: LeaveRoomDto,
    @ConnectedSocket() client: Socket
  ) {
    await client.leave(data.conversationId);
    client.emit('leftRoom', { conversationId: data.conversationId });

    this.logger.log(
      `User ${data.userId} left conversation ${data.conversationId}`
    );
  }

  @SubscribeMessage('sendMessage')
  @UseGuards(WsAuthGuard)
  async handleSendMessage(
    @MessageBody() data: SendMessageDto,
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Create message using existing service
      const message = await this.messageService.sendMessage({
        conversationId: data.conversationId,
        senderId: data.senderId,
        receiverId: data.receiverId,
        content: data.content,
        attachmentUrl: data.attachmentUrl,
        messageType: data.messageType,
      });
      console.log('message>>>>>>', message);
      // Emit to all users in the conversation room
      this.server.to(data.conversationId).emit('newMessage', {
        message,
        conversationId: data.conversationId,
      });

      // Send delivery confirmation to sender
      client.emit('messageDelivered', { messageId: message.id });

      this.logger.log(
        `Message sent from ${data.senderId} to ${data.receiverId} in conversation ${data.conversationId}`
      );
    } catch (error) {
      client.emit('error', { message: 'Failed to send message' });
      this.logger.error(`Failed to send message: ${error.message}`);
    }
  }

  @SubscribeMessage('updateMessage')
  @UseGuards(WsAuthGuard)
  async handleUpdateMessage(
    @MessageBody() data: UpdateMessageDto,
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Update message using existing service
      const updatedMessage = await this.messageService.updateMessage({
        messageId: data.messageId,
        content: data.content,
        attachmentUrl: data.attachmentUrl,
      });

      // Emit to all users in the conversation room
      this.server.to(data.conversationId).emit('messageUpdated', {
        message: updatedMessage,
        conversationId: data.conversationId,
      });

      this.logger.log(
        `Message ${data.messageId} updated in conversation ${data.conversationId}`
      );
    } catch (error) {
      client.emit('error', { message: 'Failed to update message' });
      this.logger.error(`Failed to update message: ${error.message}`);
    }
  }

  @SubscribeMessage('deleteMessage')
  @UseGuards(WsAuthGuard)
  async handleDeleteMessage(
    @MessageBody() data: DeleteMessageDto,
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Delete message using existing service
      await this.messageService.deleteMessageById(data.messageId);

      // Emit to all users in the conversation room
      this.server.to(data.conversationId).emit('messageDeleted', {
        messageId: data.messageId,
        conversationId: data.conversationId,
      });

      this.logger.log(
        `Message ${data.messageId} deleted in conversation ${data.conversationId}`
      );
    } catch (error) {
      client.emit('error', { message: 'Failed to delete message' });
      this.logger.error(`Failed to delete message: ${error.message}`);
    }
  }

  @SubscribeMessage('typing')
  @UseGuards(WsAuthGuard)
  async handleTyping(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Broadcast typing indicator to others in the conversation
      client.to(data.conversationId).emit('userTyping', {
        userId: data.userId,
        conversationId: data.conversationId,
        isTyping: data.isTyping,
      });

      this.logger.log(
        `Typing indicator: User ${data.userId} ${
          data.isTyping ? 'started' : 'stopped'
        } typing in ${data.conversationId}`
      );
    } catch (error) {
      this.logger.error(`Typing handler error:`, error);
      client.emit('error', { message: 'Failed to handle typing indicator' });
    }
  }

  @SubscribeMessage('messageStatus')
  @UseGuards(WsAuthGuard)
  async handleMessageStatus(
    @MessageBody() data: MessageStatusDto,
    @ConnectedSocket() client: Socket
  ) {
    try {
      // Update message status using existing service
      const statusMap = {
        delivered: 'DELIVERED' as const,
        seen: 'SEEN' as const,
      };

      await this.messageService.updateMessageStatus(
        data.messageId,
        statusMap[data.status]
      );

      // Notify the message sender about status update
      const message = await this.messageService.findMessageById(data.messageId);
      const senderSocketId = this.userSockets.get(message.senderId);

      if (senderSocketId) {
        this.server.to(senderSocketId).emit('messageStatusUpdated', {
          messageId: data.messageId,
          status: data.status,
          updatedBy: data.userId,
        });
      }

      this.logger.log(
        `Message ${data.messageId} status updated to ${data.status} by ${data.userId}`
      );
    } catch (error) {
      client.emit('error', { message: 'Failed to update message status' });
      this.logger.error(`Failed to update message status: ${error.message}`);
    }
  }

  @SubscribeMessage('getOnlineUsers')
  async handleGetOnlineUsers(@ConnectedSocket() client: Socket) {
    const onlineUserIds = Array.from(this.userSockets.keys());
    client.emit('onlineUsers', { users: onlineUserIds });
  }

  private extractTokenFromSocket(client: Socket): string | null {
    // console.log('1>>>>', client);
    // console.log('2>>>>', client?.handshake);
    // console.log('3>>>>', client?.handshake?.auth);
    // console.log('4>>>>', client?.handshake?.auth?.token);
    // console.log('5>>>>', client?.handshake?.headers);
    // console.log('6>>>>', client?.handshake?.headers?.authorization);
    // // Try to get token from headers
    // const authHeader = client.handshake.headers.authorization;
    // if (authHeader && authHeader.startsWith('Bearer ')) {
    //   return authHeader.substring(7);
    // }

    return client?.handshake?.auth?.token;
  }

  // Helper method to send message to specific user
  sendToUser(userId: string, event: string, data: any) {
    const socketId = this.userSockets.get(userId);
    if (socketId) {
      this.server.to(socketId).emit(event, data);
    }
  }

  // Helper method to send message to conversation room
  sendToConversation(conversationId: string, event: string, data: any) {
    this.server.to(conversationId).emit(event, data);
  }
}
