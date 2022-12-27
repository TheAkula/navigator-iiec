import { IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { HaveAccess } from 'src/decorators/have-access.decorator';
import { FileAccessRight } from 'src/shared/types';

export class MoveItemDto {
  @IsString({ each: true })
  @IsArray()
  @HaveAccess(FileAccessRight.WRITE)
  path: string[];
}

export class MoveDto {
  @IsString({ each: true })
  @IsArray()
  @HaveAccess(FileAccessRight.WRITE)
  dest: string[];

  @IsArray()
  @Type(() => MoveItemDto)
  files: MoveItemDto[];
}
