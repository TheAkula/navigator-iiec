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
import { User } from 'src/modules/users/user.model';
import { FilesService } from 'src/modules/files/files.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PATHS = require('../data/files.json');
import { FileAccessRight } from 'src/shared/types';

@Injectable()
export class FileAccessPipe implements PipeTransform {
  constructor(
    @Inject(REQUEST) private readonly req: Request,
    private filesService: FilesService,
  ) {}

  private filePathValidate(obj: object, metadata: Property) {
    if (metadata) {
      const user = this.req.user as User;

      if (!user) {
        throw new InternalServerErrorException(
          'User not found. When FileAccessGuard is used AuthGuard must be used to provide user field in request object',
        );
      }

      const path = this.filesService.getPath(...obj[metadata.name], '/');
      let foundPath = false;
      for (const p of PATHS) {
        const accessPath = this.filesService.getPath(p.path);

        if (path.startsWith(accessPath)) {
          foundPath = true;
          const roleIndex = p.roles.findIndex((r) => r.role === user.role);

          if (roleIndex === -1) {
            throw new ForbiddenException('Нет доступа к данным файлам');
          }

          // TODO: add property value validation
          const haveAccess = p.roles[roleIndex].rights.includes(
            metadata.value as FileAccessRight,
          );

          if (!haveAccess) {
            throw new ForbiddenException('Нет доступа к данным файлам');
          }
        }
      }

      if (!foundPath) {
        throw new ForbiddenException('Нет доступа к данным файлам');
      }
    }
  }

  transform(value: any) {
    Reflect.processMetadataRecursive(
      value,
      'file:access',
      this.filePathValidate.bind(this),
    );

    return value;
  }
}
