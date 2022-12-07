import { Module } from '@nestjs/common';
import { ApiConfigModule } from '../api-config/api-config.module';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  imports: [ApiConfigModule],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
