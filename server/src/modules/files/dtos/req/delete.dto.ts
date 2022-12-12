import { IsArray, IsString } from 'class-validator';

export class DeleteDto {
  @IsArray({ each: true })
  @IsString({ each: true })
  files: string[][];
}
