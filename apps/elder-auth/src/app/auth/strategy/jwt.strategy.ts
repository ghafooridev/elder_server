import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { TokenPayload } from '../types/auth.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: (req: Request) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies['Authentication'];
        }
        return token;
      },
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('AUTH_JWT_SECRET'),
    });
  }
  async validate(payload: TokenPayload) {
    return payload;
  }
}
