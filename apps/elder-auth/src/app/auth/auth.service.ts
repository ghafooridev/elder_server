import { ConfigService } from '@nestjs/config';
import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import {
  IdentityType,
  TokenPayload,
  ValidateUserParams,
} from './types/auth.type';
import { Prisma, User } from '@prisma-clients/elder-auth';

@Injectable()
export class AuthService {
  private readonly jwtExpirationMs: number;
  private readonly isProduction: boolean;

  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {
    this.jwtExpirationMs = parseInt(
      this.configService.getOrThrow('AUTH_JWT_EXPIRATION_MS'),
      10
    );
    this.isProduction =
      this.configService.getOrThrow('NODE_ENV') === 'production';
  }

  async login(
    user: User,
    response: Response
  ): Promise<{ userId: string; accessToken: string }> {
    const accessToken = this.generateAccessToken(user);
    this.setAuthCookie(response, accessToken);

    return {
      userId: user.id,
      accessToken,
    };
  }

  async validateUser(params: ValidateUserParams): Promise<User> {
    const { identityType, identityValue, password } = params;

    const where: Prisma.UserWhereUniqueInput =
      identityType === IdentityType.EMAIL
        ? { email: identityValue }
        : { mobileNumber: identityValue };

    const user = await this.usersService.getUser(where);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const passwordMatches = await compare(password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }

  private generateAccessToken(user: User): string {
    const payload: TokenPayload = { userId: user.id };
    try {
      return this.jwtService.sign(payload, {
        expiresIn: `${this.jwtExpirationMs / 1000}s`, // seconds
      });
    } catch (err) {
      throw new InternalServerErrorException('Failed to generate token');
    }
  }

  private setAuthCookie(response: Response, accessToken: string): void {
    if (!response || !response.cookie) return;

    const expires = new Date(Date.now() + this.jwtExpirationMs);

    response.cookie('Authentication', accessToken, {
      httpOnly: true,
      expires,
      secure: this.isProduction,
      sameSite: 'lax',
    });
  }

  async logout(response: Response): Promise<{ message: string }> {
    if (!response || !response.cookie) {
      return { message: 'No response object found' };
    }

    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(0),
      secure: this.isProduction,
      sameSite: 'lax',
    });

    return { message: 'Logged out successfully' };
  }
}
