import { Transform, Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { HaveAccess } from 'src/decorators/have-access.decorator';
import { FileAccessRight } from 'src/shared/types';

class DeleteItemDto {
  @IsString({ each: true })
  @IsArray()
  @HaveAccess(FileAccessRight.WRITE)
  path: string[] = [];
}

export class DeleteDto {
  @IsArray()
  @Type(() => DeleteItemDto)
  @Transform(({ value }) => {
    try {
      return Array.isArray(value) ? value.map((v) => JSON.parse(v)) : value;
    } catch (err) {
      return value;
    }
  })
  files: DeleteItemDto[] = [];
}
