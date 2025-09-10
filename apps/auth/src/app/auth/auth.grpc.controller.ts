import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AuthenticateRequest, User as UserProto } from 'types/proto/auth';

@Controller()
export class AuthGrpcController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'Authenticate')
  async authenticate(request: AuthenticateRequest): Promise<UserProto> {
    const user = await this.authService.validateToken(request.token);
    return { id: user.id, email: user.email, role: user.role };
  }
}
