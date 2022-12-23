import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiConfigService } from '../api-config/api-config.service';
import { USERS } from 'src/shared/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(apiConfigService: ApiConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: apiConfigService.getJwtSecret(),
    });
  }

  async validate(payload: any) {
    const user = USERS.find((u) => u.login === payload.login);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
