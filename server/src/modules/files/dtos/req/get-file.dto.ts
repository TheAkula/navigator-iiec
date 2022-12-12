import { IsArray, IsString } from 'class-validator';

export class GetFileDto {
  // @IsString({ each: true })
  @IsArray()
  path: string[];
}
