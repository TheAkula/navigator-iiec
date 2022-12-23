import { User } from 'src/modules/users/user.model';

export class AuthUserDto {
  user: User;
  token: string;
}
