import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ApiConfigService } from '../api-config/api-config.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    apiConfigService: ApiConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: apiConfigService.getJwtSecret(),
    });
  }

  async validate(payload: any) {
    const user = this.usersService.getUserByLogin(payload.login);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
