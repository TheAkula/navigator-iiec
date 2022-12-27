import { RoleType } from '../roles/role.model';

export class User {
  login: string;
  password: string;
  role: RoleType;
}
