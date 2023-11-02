import { UserDto } from 'src/modules/users/dtos/user.dto';

export class AuthUserDto {
  constructor(user: UserDto, token: string) {
    this.user = user;
    this.token = token;
  }

  user: UserDto;
  token: string;

  static from(user: UserDto, token: string) {
    return new AuthUserDto(user, token);
  }
}
