import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { HaveAccess } from 'src/decorators/have-access.decorator';
import { FileAccessRight } from 'src/shared/types';

export class CopyItemDto {
  @IsString({ each: true })
  @IsArray()
  @HaveAccess(FileAccessRight.READ)
  from: string[];
}

export class CopyDto {
  @IsArray()
  @Type(() => CopyItemDto)
  @ValidateNested({ each: true })
  files: CopyItemDto[];

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  @HaveAccess(FileAccessRight.WRITE)
  to?: string[];
}
