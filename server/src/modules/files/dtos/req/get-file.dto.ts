import { IsArray, IsString } from 'class-validator';

export class GetFileDto {
  @IsArray()
  @IsString({ each: true })
  path: string[];
}
