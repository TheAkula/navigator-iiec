import { IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class MoveItemDto {
  @IsString({ each: true })
  @IsArray()
  path: string[];
}

export class MoveDto {
  @IsString({ each: true })
  @IsArray()
  dest: string[];

  @IsArray()
  @Type(() => MoveItemDto)
  files: MoveItemDto[];
}
