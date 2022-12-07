import { IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class MoveItemDto {
  @IsString()
  path: string;

  @IsString()
  filename: string;
}

export class MoveDto {
  @IsString()
  dest: string;

  @IsArray()
  @Type(() => MoveItemDto)
  files: MoveItemDto[];
}
