import { IsArray, IsString } from 'class-validator';

export class DeleteDto {
  @IsArray()
  @IsString()
  files: string[][];
}
