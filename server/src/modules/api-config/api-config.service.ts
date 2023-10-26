import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { UserPermissionEntity } from '../user_permissions/user_permission.entity';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}
  private getAsString(param: string): string {
    return this.configService.get<string>(param);
  }

  private getAsNumber(param: string): number {
    return this.configService.get<number>(param);
  }

  private getAsBoolean(param: string): boolean {
    return this.configService.get<boolean>(param);
  }

  getLocalPath(): string {
    return this.getAsString('LOCAL_PATH');
  }

  getUploadDest(): string {
    return this.getAsString('UPLOAD_DEST');
  }

  getJwtSecret(): string {
    return this.getAsString('JWT_SECRET');
  }

  getJwtExpireTime(): string {
    return this.getAsString('JWT_EXPIRE_TIME');
  }

  getTypeOrmModuleOptions(): TypeOrmModuleOptions {
    return {
      type: this.getAsString('DATABASE_TYPE') as any,
      host: this.getAsString('DATABASE_HOST'),
      port: this.getAsNumber('DATABASE_PORT'),
      username: this.getAsString('DATABASE_USER'),
      password: this.getAsString('DATABASE_PASSWORD'),
      database: this.getAsString('DATABASE_NAME'),
      entities: [UserEntity, UserPermissionEntity],
      synchronize: true,
    };
  }

  getStaticFolder(): string {
    return this.getAsString('STATIC_FOLDER');
  }
}
