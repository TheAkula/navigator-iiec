import { SetMetadata } from '@nestjs/common';
import { RoleType } from 'src/modules/roles/role.model';

export const Roles = (...roles: RoleType[]) => SetMetadata('roles', roles);
