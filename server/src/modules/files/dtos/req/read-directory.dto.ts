import { IsArray, IsString } from 'class-validator';
import { HaveAccess } from 'src/decorators/have-access.decorator';
import { FileAccessRight } from 'src/shared/types';

export class ReadDirDto {
  @IsString({ each: true })
  @IsArray()
  @HaveAccess(FileAccessRight.READ)
  path: string[] = [];
}
