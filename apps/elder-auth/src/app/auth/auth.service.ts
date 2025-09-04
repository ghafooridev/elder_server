import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import {
  IdentityType,
  TokenPayload,
  ValidateUserParams,
} from './types/auth.type';
import { Prisma } from '@prisma-clients/elder-auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly ConfigService: ConfigService,
    private readonly jwtService: JwtService
  ) {}
  async login(user, response: Response) {
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
      secure: this.ConfigService.getOrThrow('NODE_ENV') === 'production',
      sameSite: 'lax',
    });
    return user;
  }

  async validateUser(params: ValidateUserParams) {
    const { identityType, identityValue, password } = params;
    try {
      const where: Prisma.UserWhereUniqueInput =
        identityType === IdentityType.EMAIL
          ? { email: identityValue }
          : { mobileNumber: identityValue };

      const user = await this.usersService.getUser(where);
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
