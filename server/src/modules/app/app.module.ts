import { Module } from '@nestjs/common';
import { FilesModule } from '../files/files.module';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigModule } from '../api-config/api-config.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from '../auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiConfigService } from '../api-config/api-config.service';
import { UsersModule } from '../users/users.module';
import { PathPermissionsModule } from '../path_permissions/path_permissions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApiConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) =>
        apiConfigService.getTypeOrmModuleOptions(),
      inject: [ApiConfigService],
    }),
    MulterModule.registerAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) => ({
        dest: apiConfigService.getUploadDest(),
      }),
      inject: [ApiConfigService],
    }),
    ServeStaticModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) => [
        {
          rootPath: join(__dirname, apiConfigService.getStaticFolder()),
        },
      ],
      inject: [ApiConfigService],
    }),
    FilesModule,
    AuthModule,
    UsersModule,
    PathPermissionsModule,
  ],
})
export class AppModule {}
