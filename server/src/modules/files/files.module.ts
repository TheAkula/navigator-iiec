import { Module } from '@nestjs/common';
import { ApiConfigModule } from '../api-config/api-config.module';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { PathPermissionsModule } from '../path_permissions/path_permissions.module';

@Module({
  imports: [ApiConfigModule, PathPermissionsModule],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
