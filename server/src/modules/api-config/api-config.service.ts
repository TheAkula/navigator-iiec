import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}
  private getAsString(param: string): string {
    return this.configService.get<string>(param);
  }

  private getAsNumber(param: string): number {
    return this.configService.get<number>(param);
  }

  private getAsBoolean(param: string): boolean {
    return this.configService.get<boolean>(param);
  }

  getLocalPath(): string {
    return this.getAsString('LOCAL_PATH');
  }

  getUploadDest(): string {
    return this.getAsString('UPLOAD_DEST');
  }

  getJwtSecret(): string {
    return this.getAsString('JWT_SECRET');
  }
}
