import { Module } from '@nestjs/common';
import { PathPermissionsService } from './path_permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PathPermissionEntity } from './path_permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PathPermissionEntity])],
  providers: [PathPermissionsService],
  exports: [PathPermissionsService],
})
export class PathPermissionsModule {}
