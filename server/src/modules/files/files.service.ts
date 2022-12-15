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
import { FileType } from './file';

@Injectable()
export class FilesService {
  constructor(private apiConfigService: ApiConfigService) {}

  getPath(...paths: string[]): string {
    return join(this.apiConfigService.getLocalPath(), ...paths);
  }

  async readDir({ path = [] }: ReadDirDto): Promise<FileType[]> {
    return new Promise<FileType[]>((res) => {
      return readdir(this.getPath(...path), async (err, content) => {
        if (err) {
          throw new InternalServerErrorException(
            'Произошла ошибка при чтении папки',
          );
        }
        const files = [];

        for (const file of content) {
          const some = await new Promise<FileType>((resolve) => {
            stat(this.getPath(...path, file), (err, stats) => {
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
                path: [...path, file],
                mtime: stats.mtimeMs,
                fullPath: this.getPath(...path, file),
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
          this.getPath(...dest, file.filename),
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
      const filePath = this.getPath(...file);
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
          this.getPath(...file.path),
          this.getPath(...dest, file.path[file.path.length - 1]),
          (err) => {
            if (err) {
              console.log(err);

              throw new InternalServerErrorException(
                'Произошла ошибка при перемещении файла',
              );
            }
          },
        ),
      );
    }
  }

  async rename({ path, new_name }: RenameDto): Promise<void> {
    return rename(
      this.getPath(...path),
      this.getPath(...path.slice(0, path.length - 1).concat(new_name)),
      (err) => {
        if (err) {
          throw new InternalServerErrorException(
            'Произошла ошибка при переименовыании файла',
          );
        }
      },
    );
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

  async copy({ files, to = [] }: CopyDto): Promise<void> {
    console.log(files);

    for (const file of files) {
      if (file.from[file.from.length - 2] === to[file.from.length - 1]) {
        throw new BadRequestException(
          'Конечная папка, в которую следует поместить файлы, является дочерней для папки, в которой они находятся.',
        );
      }

      if (statSync(this.getPath(...file.from)).isFile()) {
        await new Promise(() =>
          copyFile(
            this.getPath(...file.from),
            this.getPath(...to, file.from[file.from.length - 1]),
            (err) => {
              if (err) {
                console.log(err);

                throw new BadRequestException(
                  'Произошла ошибка при копировании файлов',
                );
              }
            },
          ),
        );
      } else {
        await new Promise(() => {
          return cp(
            this.getPath(...file.from),
            this.getPath(...to),
            { recursive: true },
            (err) => {
              if (err) {
                throw new InternalServerErrorException(
                  'Произошла ошибка при копировании папки',
                );
              }
            },
          );
        });
      }
    }
  }
}
