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
import { PathPermissionsService } from 'src/modules/path_permissions/path_permissions.service';

@Injectable()
export class FileAccessPipe implements PipeTransform {
  constructor(
    @Inject(REQUEST) private readonly req: Request,
    private pathPermissionsService: PathPermissionsService,
  ) {}

  private async filePathValidate(obj: object, metadata: Property) {
    if (metadata) {
      const user = this.req.user as UserEntity;
      const permission = metadata.value as FileAccessRight;

      if (!user) {
        throw new InternalServerErrorException(
          'User not found. When FileAccessGuard is used AuthGuard must be used to provide user field in request object',
        );
      }

      const path = obj[metadata.name].join('/');

      const closestPath = await this.pathPermissionsService.getByPath(path);

      if (!closestPath) {
        throw new ForbiddenException('Нет доступа к файлам');
      }

      switch (permission) {
        case FileAccessRight.READ:
          const readGroup = user.groups.find(
            (g) =>
              g.id == closestPath.readGroup?.id ||
              g.id == closestPath.writeGroup?.id,
          );

          if (readGroup) {
            return;
          }
          break;
        case FileAccessRight.WRITE:
          const writeGroup = user.groups.find(
            (g) => g.id == closestPath.writeGroup?.id,
          );

          if (writeGroup) {
            return;
          }
          break;
        default:
          throw new InternalServerErrorException('Unknown access right');
      }

      throw new ForbiddenException('Нет доступа к файлам');
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
