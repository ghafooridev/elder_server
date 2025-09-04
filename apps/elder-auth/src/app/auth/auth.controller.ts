import { AuthService } from './auth.service';
import { User } from '../users/user.model';
import { LoginInputDto } from './dto/login-input.dto';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as ExpressRequest, Response } from 'express';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

interface AuthenticatedRequest extends ExpressRequest {
  user: User;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  // @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'login user' })
  @ApiBody({ type: LoginInputDto })
  @ApiResponse({ status: 200, description: 'Return tokens' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  async login(@Request() req: AuthenticatedRequest, res: Response) {
    const _user = await this.authService.login(req.user, res);
    return _user;
  }
}
