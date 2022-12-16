import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

class DeleteItemDto {
  @IsString({ each: true })
  @IsArray()
  path: string[];
}

export class DeleteDto {
  @IsArray()
  @Type(() => DeleteItemDto)
  @Transform(({ value }) => {
    try {
      return Array.isArray(value) ? value.map((v) => JSON.parse(v)) : value;
    } catch (err) {
      throw new BadRequestException(err);
    }
  })
  files: DeleteItemDto[];
}
