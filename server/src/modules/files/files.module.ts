import { Module } from '@nestjs/common';
import { ApiConfigModule } from '../api-config/api-config.module';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { UserPermissionsModule } from '../user_permissions/user_permissions.module';

@Module({
  imports: [ApiConfigModule, UserPermissionsModule],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
