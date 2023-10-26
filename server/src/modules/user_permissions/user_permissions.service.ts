import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPermissionEntity } from './user_permission.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UserPermissionsService {
  constructor(
    @InjectRepository(UserPermissionEntity)
    private userPermissionsRepository: Repository<UserPermissionEntity>,
  ) {}

  getByPath(path: string): Promise<UserPermissionEntity[]> {
    return this.userPermissionsRepository
      .createQueryBuilder('user_permission')
      .where("LOCATE(CONCAT(user_permission.path, '%'), :path, 0) = 0", {
        path: path,
      })
      .getMany();
  }

  getByPathAndRole(
    path: string,
    role: string,
  ): Promise<UserPermissionEntity[]> {
    return this.userPermissionsRepository
      .createQueryBuilder('user_permission')
      .where("REPLACE(:path, '%', '') LIKE CONCAT(user_permission.path, '%')", {
        path: path,
      })
      .andWhere('user_permission.role = :role', { role: role })
      .getMany();
  }
}
