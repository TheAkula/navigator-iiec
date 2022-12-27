import { RoleType } from 'src/modules/roles/role.model';

export enum FileAccessRight {
  READ,
  WRITE,
}

export interface RoleAccess {
  role: RoleType;
  rights: FileAccessRight[];
}

export interface FileAccess {
  path: string;
  roles: RoleAccess[];
}
