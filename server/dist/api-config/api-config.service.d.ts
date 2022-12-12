import { ConfigService } from '@nestjs/config';
export declare class ApiConfigService {
    private configService;
    constructor(configService: ConfigService);
    private getAsString;
    private getAsNumber;
    private getAsBoolean;
    getLocalPath(): string;
    getUploadDest(): string;
}
