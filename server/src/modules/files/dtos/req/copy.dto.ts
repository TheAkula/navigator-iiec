import { IsArray, IsString } from 'class-validator';

export class CopyItemDto {
  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsString()
  filename: string;

  @IsString()
  parent: string;
}

export class CopyDto {
  @IsArray()
  @IsString()
  files: CopyItemDto[];
}
