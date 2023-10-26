import { UserDto } from 'src/modules/users/dtos/user.dto';

export class AuthUserDto {
  user: UserDto;
  token: string;
}
