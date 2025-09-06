import { AuthService } from './auth.service';
import { User } from '../users/user.model';
import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest, Response } from 'express';
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
  async login(
    @Request() req: AuthenticatedRequest,
    @Res({ passthrough: true }) res: Response
  ) {
    return await this.authService.login(req.user, res);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiLogoutDocs()
  async logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }
}
