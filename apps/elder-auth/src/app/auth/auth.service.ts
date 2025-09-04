import { TokenPayload } from './dto/token-payload.interface';
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly ConfigService: ConfigService,
    private readonly jwtService: JwtService
  ) {}
  async login(
    loginInput: { email: string; password: string },
    response: Response
  ) {
    const user = await this.validateUser(loginInput.email, loginInput.password);
    const expires = new Date();
    expires.setMilliseconds(
      expires.getDate() +
        parseInt(this.ConfigService.getOrThrow('AUTH_JWT_EXPIRATION_MS'))
    );

    const TokenPayload: TokenPayload = { userId: user.id };
    const accessToken = this.jwtService.sign(TokenPayload);
    response.cookie('Authentication', accessToken, {
      httpOnly: true,
      expires,
      secure: this.ConfigService.getOrThrow('NODE_ENV') === 'production', // Use secure cookies in production
      sameSite: 'lax', // Adjust based on your requirements
    });
    return user;
  }

  private async validateUser(email: string, password: string): Promise<any> {
    try {
      // Implement user validation logic here
      const user = await this.usersService.getUser({ email });
      const authenticated = await compare(password, user.password);
      if (!authenticated) {
        throw new UnauthorizedException();
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
