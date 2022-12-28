import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { FilesService } from 'src/modules/files/files.service';
import { User } from 'src/modules/users/user.model';
import { PATHS } from 'src/shared/constants';
import { FileAccessRight } from 'src/shared/types';
import { Reflect } from 'src/utils/reflect';

export enum DtoPlace {
  QUERY = 'query',
  BODY = 'body',
  PARAMS = 'params',
}

// TODO: move dto and place in metadata(custom or via SetMetadata(@nestjs/common))
export function FileAccessGuard(dto: object, place: DtoPlace) {
  @Injectable()
  class Guard implements CanActivate {
    constructor(
      // FIXME: should be private
      public reflector: Reflector,
      public filesService: FilesService,
    ) {}

    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const req = context.switchToHttp().getRequest();
      const obj = req[place];

      if (!obj) {
        throw new InternalServerErrorException(
          'Dto not found in provided place',
        );
      }

      const user = req.user as User;

      if (!user) {
        throw new InternalServerErrorException(
          'User not found. When FileAccessGuard is used AuthGuard must be used to provide user field in request object',
        );
      }

      const metadata = Reflect.getMetadataProperties('file:access', dto);

      if (!metadata || metadata.length === 0) {
        return false;
      }

      for (const property of metadata) {
        const path = this.filesService.getPath(...obj[property.name]);

        for (const p of PATHS) {
          const accessPath = this.filesService.getPath(p.path);
          if (path.startsWith(accessPath)) {
            const roleIndex = p.roles.findIndex((r) => r.role === user.role);

            if (roleIndex === -1) {
              return false;
            }

            // TODO: add property value validation
            return p.roles[roleIndex].rights.includes(
              property.value as FileAccessRight,
            );
          }
        }
      }

      return false;
    }
  }

  return Guard;
}
