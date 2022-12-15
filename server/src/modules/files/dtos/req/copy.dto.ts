import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CopyItemDto {
  @IsString({ each: true })
  @IsArray()
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
  to?: string[];
}
