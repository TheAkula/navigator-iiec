import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ApiConfigModule } from '../api-config/api-config.module';
import { ApiConfigService } from '../api-config/api-config.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    ApiConfigModule,
    JwtModule.registerAsync({
      imports: [ApiConfigModule],
      useFactory(apiConfigService: ApiConfigService) {
        return {
          secret: apiConfigService.getJwtSecret(),
          signOptions: { expiresIn: apiConfigService.getJwtExpireTime() },
        };
      },
      inject: [ApiConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
