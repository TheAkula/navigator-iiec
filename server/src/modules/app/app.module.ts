import { Module } from '@nestjs/common';
import { FilesModule } from '../files/files.module';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigModule } from '../api-config/api-config.module';
import { ApiConfigService } from '../api-config/api-config.service';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from '../auth/auth.module';
import { join } from 'path';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    FilesModule,
    ConfigModule.forRoot(),
    ApiConfigModule,
    AuthModule,
  ],
})
export class AppModule {}
