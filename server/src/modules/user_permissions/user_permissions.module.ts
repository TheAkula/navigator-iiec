import { Module } from '@nestjs/common';
import { UserPermissionsService } from './user_permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermissionEntity } from './user_permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPermissionEntity])],
  providers: [UserPermissionsService],
  exports: [UserPermissionsService],
})
export class UserPermissionsModule {}
