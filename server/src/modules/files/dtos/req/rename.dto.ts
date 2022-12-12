import { IsArray, IsString } from 'class-validator';

export class RenameDto {
  @IsString({ each: true })
  @IsArray()
  path: string[];

  @IsString()
  new_name: string;
}
