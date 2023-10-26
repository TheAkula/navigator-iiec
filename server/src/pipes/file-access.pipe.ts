import {
  PipeTransform,
  Injectable,
  Inject,
  InternalServerErrorException,
  ForbiddenException,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Reflect, Property } from 'src/utils';
import { Request } from 'express';
import { UserEntity } from 'src/modules/users/user.entity';
import { FileAccessRight } from 'src/shared/types';
import { UserPermissionsService } from 'src/modules/user_permissions/user_permissions.service';

@Injectable()
export class FileAccessPipe implements PipeTransform {
  constructor(
    @Inject(REQUEST) private readonly req: Request,
    private userPermissionsService: UserPermissionsService,
  ) {}

  private async filePathValidate(obj: object, metadata: Property) {
    if (metadata) {
      const user = this.req.user as UserEntity;

      if (!user) {
        throw new InternalServerErrorException(
          'User not found. When FileAccessGuard is used AuthGuard must be used to provide user field in request object',
        );
      }

      const path = obj[metadata.name].join('/');

      const paths = await this.userPermissionsService.getByPathAndRole(
        path,
        user.permissions,
      );

      if (paths.length == 0) {
        throw new ForbiddenException('Нет доступа к данным файлам');
      }

      const closestPath = paths.reduce((p, c) =>
        c.path.length > p.path.length ? c : p,
      );

      const permission = metadata.value as FileAccessRight;

      if (!closestPath.permissions.includes(permission)) {
        throw new ForbiddenException('Нет доступа к данным файлам');
      }
    }
  }

  async transform(value: any) {
    await Reflect.processMetadataRecursive(
      value,
      'file:access',
      this.filePathValidate.bind(this),
    );

    return value;
  }
}
