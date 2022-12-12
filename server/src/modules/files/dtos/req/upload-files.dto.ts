import { IsArray, IsString } from 'class-validator';

export class UploadFilesDto {
  @IsString({ each: true })
  @IsArray()
  dest: string[];
}
