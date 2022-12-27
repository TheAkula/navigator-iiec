import { Injectable } from '@nestjs/common';
import { USERS } from 'src/shared/constants';
import { User } from '../users/user.model';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './types/token';
import { AuthUserDto } from './dtos/res/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser(login: string, password: string): Partial<User> | null {
    for (const user of USERS) {
      if (user.login === login && user.password === password) {
        const { password, ...result } = user;

        return result;
      }
    }

    return null;
  }

  login(user: User): AuthUserDto {
    const payload: TokenPayload = {
      login: user.login,
    };

    return { user, token: this.jwtService.sign(payload) };
  }
}
