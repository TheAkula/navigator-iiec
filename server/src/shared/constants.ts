import { RoleType } from '../modules/roles/role.model';
import { User } from '../modules/users/user.model';

export const Lab: User = {
  login: 'lab',
  password: 'lab',
  role: RoleType.STUDENT,
};

export const Teacher: User = {
  login: 'prepod',
  password: 'prepod',
  role: RoleType.TEACHER,
};

export const Admin: User = {
  login: 'admin',
  password: 'admin',
  role: RoleType.ADMIN,
};

export const USERS = [Lab, Admin, Teacher];
