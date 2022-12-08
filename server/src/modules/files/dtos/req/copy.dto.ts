import { IsArray, IsString } from 'class-validator';

export class CopyItemDto {
  @IsArray()
  @IsString()
  from: string[];
}

export class CopyDto {
  @IsArray()
  @IsString()
  files: CopyItemDto[];

  @IsString()
  to: string[];
}
