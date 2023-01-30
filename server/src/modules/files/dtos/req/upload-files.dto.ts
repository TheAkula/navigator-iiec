import { Transform } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { HaveAccess } from 'src/decorators/have-access.decorator';
import { FileAccessRight } from 'src/shared/types';

export class UploadFilesDto {
  @IsString({ each: true })
  @IsArray()
  @Transform(({ value }) => {
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  })
  @HaveAccess(FileAccessRight.WRITE)
  dest: string[] = [];
}
