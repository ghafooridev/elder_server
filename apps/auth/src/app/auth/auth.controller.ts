import { AuthService } from './auth.service';
import { User } from '../users/user.model';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LocalAuthGuard } from './guard/auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { ApiLoginDocs, ApiLogoutDocs } from './doc/auth.swagger';
import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
  User as UserProto,
} from 'types/proto/auth';

interface AuthenticatedRequest extends ExpressRequest {
  user: User;
}

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiLoginDocs()
  async login(@Request() req: AuthenticatedRequest) {
    return await this.authService.login(req.user);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiLogoutDocs()
  async logout() {
    // logout is now purely client-side (delete Bearer token from secure storage)
    return { message: 'Logged out successfully (client must delete token)' };
  }

  async authenticate(request: AuthenticateRequest): Promise<UserProto> {
    const user = await this.authService.validateToken(request.token);
    return { id: user.id, email: user.email };
  }
}
