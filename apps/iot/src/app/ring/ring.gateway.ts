import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import {
  Inject,
  Logger,
  OnModuleInit,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { WsAuthGuard } from '@elder/nestjs';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceClient,
} from 'types/proto/auth';
import { firstValueFrom } from 'rxjs';
import { RingService } from './ring.service';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/ring',
})
@UsePipes(new ValidationPipe())
export class RingGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(RingGateway.name);
  private authService: AuthServiceClient;

  constructor(
    private readonly ringService: RingService,
    @Inject(AUTH_PACKAGE_NAME) private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.authService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
    this.ringService.setServer(this.server);
  }

  async handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    try {
      const token = this.extractTokenFromSocket(client);
      if (!token) return client.disconnect();
      const user = await firstValueFrom(
        this.authService.authenticate({ token })
      );
      if (!user?.id) return client.disconnect();
      client.data.user = user;
    } catch (e) {
      this.logger.warn(`WS auth failed for ${client.id}`);
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('subscribeDevice')
  @UseGuards(WsAuthGuard)
  async handleSubscribeDevice(
    @MessageBody() data: { deviceId: string },
    @ConnectedSocket() client: Socket
  ) {
    const room = this.ringService.roomForDevice(data.deviceId);
    await client.join(room);
    client.emit('subscribed', { deviceId: data.deviceId });
  }

  private extractTokenFromSocket(client: Socket): string | null {
    return client?.handshake?.auth?.token || null;
  }
}
