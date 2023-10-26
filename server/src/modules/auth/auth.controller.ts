import { Controller, Post, UseGuards } from '@nestjs/common';
import { UserEntity } from '../users/user.entity';
import { AuthService } from './auth.service';
import { CurrentUser } from '../../decorators/current-user.decorator';
import { AuthUserDto } from './dtos/res/auth-user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@CurrentUser() user: UserEntity): AuthUserDto {
    return this.authService.login(user);
  }
}
