import {
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceClient,
} from 'types/proto/auth';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, OnModuleInit {
  private authService: AuthServiceClient;
  private readonly logger = new Logger(AuthGuard.name);
  private readonly AUTH_HEADER = 'authorization';
  private readonly TOKEN_PREFIX = 'Bearer ';

  constructor(@Inject(AUTH_PACKAGE_NAME) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.authService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('No authentication token provided');
    }

    try {
      const res = await firstValueFrom(
        this.authService.authenticate({ token })
      );
      this.logger.debug(`AuthService response: ${JSON.stringify(res)}`);

      if (!res?.id) {
        throw new UnauthorizedException('Invalid or expired token');
      }

      request.user = res;
      return true;
    } catch (err) {
      this.logger.error('Authentication error:', err);
      throw new UnauthorizedException('Authentication failed');
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const authHeader =
      request.headers[this.AUTH_HEADER] ||
      request.headers[this.AUTH_HEADER.toLowerCase()];
    if (
      authHeader &&
      typeof authHeader === 'string' &&
      authHeader.startsWith(this.TOKEN_PREFIX)
    ) {
      return authHeader.substring(this.TOKEN_PREFIX.length);
    }
    return undefined;
  }

  private getRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest();
  }
}
