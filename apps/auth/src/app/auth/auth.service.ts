import { ConfigService } from '@nestjs/config';
import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import {
  IdentityType,
  TokenPayload,
  ValidateUserParams,
} from './types/auth.type';
import { Prisma, User } from '@prisma-clients/auth';

@Injectable()
export class AuthService {
  private readonly jwtExpirationMs: number;

  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {
    this.jwtExpirationMs = parseInt(
      this.configService.getOrThrow('JWT_EXPIRATION_MS'),
      10
    );
  }

  async login(user: User): Promise<{ userId: string; accessToken: string }> {
    const accessToken = this.generateAccessToken(user);

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
        secret: this.configService.getOrThrow('JWT_SECRET'),
      });
    } catch (err) {
      throw new InternalServerErrorException('Failed to generate token');
    }
  }

  async logout(): Promise<{ message: string }> {
    // With Bearer tokens, logout is handled client-side
    // by simply deleting the stored token from secure storage.
    // Optionally, you can implement server-side token blacklisting.
    return { message: 'Logged out successfully (client must delete token)' };
  }
}
