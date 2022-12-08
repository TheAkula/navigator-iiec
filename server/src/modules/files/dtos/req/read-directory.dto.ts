import { IsArray, IsString } from 'class-validator';

export class ReadDirDto {
  @IsString({ each: true })
  @IsArray()
  path: string[];
}
