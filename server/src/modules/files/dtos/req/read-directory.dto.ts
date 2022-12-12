import { IsArray, IsOptional, IsString } from 'class-validator';

export class ReadDirDto {
  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  path?: string[];
}
