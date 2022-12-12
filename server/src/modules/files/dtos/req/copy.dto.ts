import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

export class CopyItemDto {
  @IsArray()
  @IsString({ each: true })
  from: string[];
}

export class CopyDto {
  @IsArray()
  @Type(() => CopyItemDto)
  files: CopyItemDto[];

  @IsString({ each: true })
  @IsArray()
  to: string[];
}
