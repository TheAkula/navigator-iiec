import { RoleType } from '../modules/roles/role.model';
import { User } from '../modules/users/user.model';
import { FileAccess, FileAccessRight } from './types';

export const PATHS: FileAccess[] = [
  {
    path: 'for-teachers/',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'for-all/',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'for-students/',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'for-admins/',
    roles: [
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'smk&/',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'stud2',
    roles: [
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'labor',
    roles: [
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ],
      },
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.WRITE, FileAccessRight.READ],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'prepod$',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'kmo$',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
    ],
  },
  {
    path: 'РЗ$',
    roles: [
      {
        role: RoleType.TEACHER,
        rights: [FileAccessRight.READ],
      },
      {
        role: RoleType.ADMIN,
        rights: [FileAccessRight.READ, FileAccessRight.WRITE],
      },
      {
        role: RoleType.STUDENT,
        rights: [FileAccessRight.READ],
      },
    ],
  },
];

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
