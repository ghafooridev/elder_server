import {
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class WsAuthGuard implements CanActivate {
  private readonly logger = new Logger(WsAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client = context.switchToWs().getClient();

      // Check if user data exists on the socket (set during connection)
      if (!client.data?.user?.id) {
        this.logger.warn(`WebSocket client ${client.id} not authenticated`);
        throw new WsException('Authentication required');
      }

      // User is authenticated, allow the request
      return true;
    } catch (error) {
      this.logger.error('WebSocket authentication error:', error);
      throw new WsException('Authentication failed');
    }
  }
}
