import { Injectable } from '@nestjs/common';
import { UserEntity } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './types/token';
import { AuthUserDto } from './dtos/res/auth-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(
    login: string,
    password: string,
  ): Promise<Partial<UserEntity> | null> {
    const user = await this.usersService.getUserByLogin(login);

    if (user == null) {
      return null;
    }

    if (user.login === login && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  login(user: UserEntity): AuthUserDto {
    const payload: TokenPayload = {
      login: user.login,
    };

    return { user, token: this.jwtService.sign(payload) };
  }
}
