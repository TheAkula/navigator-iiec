import { IsArray, IsString } from 'class-validator';

export class GetFileDto {
  @IsArray()
  path: string[];
}
