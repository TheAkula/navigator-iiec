import { UserEntity } from '../user.entity';

export class UserDto {
  constructor(id: number, login: string) {
    this.id = id;
    this.login = login;
  }

  login: string;
  id: number;

  static from(entity: UserEntity): UserDto {
    return new UserDto(entity.id, entity.login);
  }
}
