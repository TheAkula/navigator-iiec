import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PathPermissionEntity } from './path_permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PathPermissionsService {
  constructor(
    @InjectRepository(PathPermissionEntity)
    private pathPermissionsRepository: Repository<PathPermissionEntity>,
  ) {}

  getByPath(path: string): Promise<PathPermissionEntity | null> {
    return this.pathPermissionsRepository
      .createQueryBuilder('path_permission')
      .where("REPLACE(:path, '%', '') LIKE CONCAT(path_permission.path, '%')", {
        path: path,
      })
      .leftJoinAndSelect('path_permission.writeGroup', 'writeGroup')
      .leftJoinAndSelect('path_permission.readGroup', 'readGroup')
      .andWhere((qb) => {
        return (
          'path_permission.path = ' +
          qb
            .subQuery()
            .from(PathPermissionEntity, 'path_perm')
            .select('max(path_perm.path)', 'max_path')
            .getQuery()
        );
      })
      .getOne();
  }
}
