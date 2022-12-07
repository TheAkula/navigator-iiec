import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  copyFile,
  copyFileSync,
  cp,
  lstatSync,
  mkdirSync,
  readdir,
  readdirSync,
  rename,
  rm,
  stat,
  statSync,
  unlink,
} from 'fs';
import { extname, join } from 'path';
import { ApiConfigService } from '../api-config/api-config.service';
import { CopyDto } from './dtos/req/copy.dto';
import { DeleteDto } from './dtos/req/delete.dto';
import { MoveDto } from './dtos/req/move.dto';
import { ReadDirDto } from './dtos/req/read-directory.dto';
import { RenameDto } from './dtos/req/rename.dto';
import { UploadFilesDto } from './dtos/req/upload-files.dto';
import { SuccessDto } from './dtos/res/success.dto';
import { File } from './file';

@Injectable()
export class FilesService {
  constructor(private apiConfigService: ApiConfigService) {}

  getPath(...paths: string[]): string {
    return join(this.apiConfigService.getLocalPath(), ...paths);
  }

  async readDir({ path }: ReadDirDto): Promise<File[]> {
    return new Promise<File[]>((res) => {
      return readdir(this.getPath(path), async (err, content) => {
        if (err) {
          throw new InternalServerErrorException(
            'Произошла ошибка при чтении папки',
          );
        }
        const files = [];

        for (const file of content) {
          const some = await new Promise<File>((resolve) => {
            stat(this.getPath(path, file), (err, stats) => {
              if (err) {
                throw new InternalServerErrorException(
                  'Произошла ошибка при чтении папки',
                );
              }

              const obj = {
                size: stats.size,
                isDir: stats.isDirectory(),
                ext: extname(file),
                title: file,
                path: join(path, file),
                mtime: stats.mtimeMs,
                fullPath: this.getPath(path, file),
              };

              return resolve(obj);
            });
          });

          files.push(some);
        }
        return res(files);
      });
    });
  }

  async uploadFiles(
    { dest }: UploadFilesDto,
    files: Express.Multer.File[],
  ): Promise<SuccessDto> {
    for (const file of files) {
      await new Promise(() => {
        rename(
          join(this.apiConfigService.getUploadDest(), file.filename),
          this.getPath(dest, file.filename),
          (err) => {
            if (err) {
              throw new InternalServerErrorException(
                'Произошла ошибка при загрузке файлов',
              );
            }
          },
        );
      });
    }

    return { message: 'success' };
  }

  async delete({ files }: DeleteDto): Promise<void> {
    for (const file of files) {
      const filePath = this.getPath(file);
      const isDir = statSync(filePath);

      if (isDir) {
        await new Promise(() => {
          rm(filePath, { recursive: true, force: true }, (err) => {
            if (err) {
              throw new InternalServerErrorException(
                'Произошла ошибка при удалении папки',
              );
            }
          });
        });
      } else {
        await new Promise(() =>
          unlink(filePath, (err) => {
            if (err) {
              throw new InternalServerErrorException(
                'Произошла ошибка при удалении файла',
              );
            }
          }),
        );
      }
    }
  }

  async move({ dest, files }: MoveDto): Promise<void> {
    for (const file of files) {
      await new Promise(() =>
        rename(
          this.getPath(file.path),
          this.getPath(dest, file.filename),
          (err) => {
            if (err) {
              throw new InternalServerErrorException(
                'Произошла ошибка при перемещении файла',
              );
            }
          },
        ),
      );
    }
  }

  async rename({ path, new_name, dest }: RenameDto): Promise<void> {
    return this.move({
      dest,
      files: [
        {
          filename: new_name,
          path: path,
        },
      ],
    });
  }

  private copyFolderSync(from: string, to: string): void {
    mkdirSync(to);
    return readdirSync(from).forEach((element) => {
      if (lstatSync(this.getPath(from, element)).isFile()) {
        copyFileSync(this.getPath(from, element), this.getPath(to, element));
      } else {
        this.copyFolderSync(
          this.getPath(from, element),
          this.getPath(to, element),
        );
      }
    });
  }

  async copy({ files }: CopyDto): Promise<void> {
    for (const file of files) {
      if (file.parent === file.from) {
        throw new BadRequestException(
          'Конечная папка, в которую следует поместить файлы, является дочерней для папки, в которой они находятся.',
        );
      }

      if (statSync(file.from).isFile()) {
        await new Promise(() =>
          copyFile(file.from, file.to, (err) => {
            if (err) {
              throw new BadRequestException(
                'Произошла ошибка при копировании файлов',
              );
            }
          }),
        );
      } else {
        await new Promise(() => {
          return cp(file.from, file.to, { recursive: true }, (err) => {
            if (err) {
              throw new InternalServerErrorException(
                'Произошла ошибка при копировании папки',
              );
            }
          });
        });
      }
    }
  }
}
