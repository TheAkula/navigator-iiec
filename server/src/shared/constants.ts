import { RoleType } from '../modules/roles/role.model';
import { User } from '../modules/users/user.model';
import { FileAccess, FileAccessRight } from './types';

export const PATHS: FileAccess[] = [
  {
    path: '/home/nikolay/Projects/navigator-iiec/files/for-teachers/',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: '/home/nikolay/Projects/navigator-iiec/files/for-all',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ],
      },
    ],
  },
  {
    path: '/home/nikolay/Projects/navigator-iiec/files/for-students/',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
];

export const Lab: User = {
  login: 'lab',
  password: 'lab',
  role: RoleType.STUDENT,
};

export const Admin: User = {
  login: 'admin',
  password: 'admin',
  role: RoleType.TEACHER,
};

export const USERS = [Lab, Admin];
