import { IsArray, IsOptional, IsString } from 'class-validator';
import { HaveAccess } from 'src/decorators/have-access.decorator';
import { FileAccessRight } from 'src/shared/types';

export class ReadDirDto {
  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  @HaveAccess(FileAccessRight.READ)
  path?: string[];
}
