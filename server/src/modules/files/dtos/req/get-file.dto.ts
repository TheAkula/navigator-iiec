import { IsString } from 'class-validator';

export class GetFileDto {
  @IsString()
  path: string;
}
