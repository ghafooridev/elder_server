import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { IdentityType } from '../types/auth.type';

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'identityValue',
      passwordField: 'password',
      passReqToCallback: true,
    });
  }

  async validate(
    req: any,
    identityValue: string,
    password: string
  ): Promise<any> {
    const identityType = req.body.identityType as IdentityType;

    if (
      ![IdentityType.EMAIL, IdentityType.MOBILE_NUMBER].includes(identityType)
    ) {
      throw new Error('Invalid identity type');
    }

    const user = await this.authService.validateUser({
      identityType,
      identityValue,
      password,
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
