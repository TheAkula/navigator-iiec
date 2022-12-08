import { IsString } from 'class-validator';

export class RenameDto {
  @IsString()
  path: string[];

  @IsString()
  new_name: string;
}
