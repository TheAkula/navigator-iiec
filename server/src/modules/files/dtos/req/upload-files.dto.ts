import { IsString } from 'class-validator';

export class UploadFilesDto {
  @IsString()
  dest: string[];
}
