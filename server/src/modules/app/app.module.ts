import { Module } from '@nestjs/common';
import { FilesModule } from '../files/files.module';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigModule } from '../api-config/api-config.module';
import { ApiConfigService } from '../api-config/api-config.service';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    FilesModule,
    ConfigModule.forRoot(),
    ApiConfigModule,
    AuthModule,
    MulterModule.registerAsync({
      imports: [ApiConfigModule],
      useFactory: async (apiConfigService: ApiConfigService) => ({
        dest: apiConfigService.getUploadDest(),
      }),
      inject: [ApiConfigService],
    }),
  ],
})
export class AppModule {}
