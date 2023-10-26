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
import { UserPermissionsModule } from '../user_permissions/user_permissions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (apiConfigService: ApiConfigService) =>
        apiConfigService.getTypeOrmModuleOptions(),
      inject: [ApiConfigService],
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'static'),
    }),
    FilesModule,
    ApiConfigModule,
    AuthModule,
    UsersModule,
    UserPermissionsModule,
  ],
})
export class AppModule {}
