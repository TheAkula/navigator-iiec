import { IsString } from 'class-validator';

export class ReadDirDto {
  @IsString()
  path: string;
}
