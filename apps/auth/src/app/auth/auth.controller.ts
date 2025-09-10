import { AuthService } from './auth.service';
import { User } from '../users/user.model';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LocalAuthGuard } from './guard/auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { ApiLoginDocs, ApiLogoutDocs } from './doc/auth.swagger';

interface AuthenticatedRequest extends ExpressRequest {
  user: User;
}

@Controller('auth')
export class AuthController {
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
}
