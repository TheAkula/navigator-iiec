import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  copyFile,
  cp,
  mkdir,
  readdir,
  rename,
  rm,
  stat,
  statSync,
  unlink,
  writeFile,
} from 'fs';
import { extname, join, dirname } from 'path';
import { ApiConfigService } from '../api-config/api-config.service';
import { CopyDto } from './dtos/req/copy.dto';
import { CreateDirDto } from './dtos/req/create-dir.dto';
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
    return join(
      dirname(require.main.filename),
      this.apiConfigService.getLocalPath(),
      ...paths,
    );
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
    await Promise.all(
      files.map(async (file) => {
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
      }),
    );

    return { message: 'success' };
  }

  async delete({ files }: DeleteDto): Promise<void[]> {
    return Promise.all(
      files.map((file) => {
        return new Promise<void>(async () => {
          const filePath = this.getPath(...file.path);
          const stat = statSync(filePath);

          const { isDirectory } = stat;

          if (isDirectory.call(stat)) {
            await new Promise(() =>
              rm(filePath, { recursive: true, force: true }, (err) => {
                if (err) {
                  throw new InternalServerErrorException(
                    'Произошла ошибка при удалении папки',
                  );
                }
              }),
            );
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
        });
      }),
    );
  }

  async move({ dest, files }: MoveDto): Promise<void[]> {
    return Promise.all(
      files.map(async (file) => {
        await new Promise(() =>
          rename(
            this.getPath(...file.path),
            this.getPath(...dest, file.path[file.path.length - 1]),
            (err) => {
              if (err) {
                console.error(err);

                throw new InternalServerErrorException(
                  'Произошла ошибка при перемещении файла',
                );
              }
            },
          ),
        );
      }),
    );
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

  async copy({ files, to = [] }: CopyDto): Promise<void[]> {
    return Promise.all(
      files.map(async (file) => {
        await new Promise(async () => {
          if (statSync(this.getPath(...file.from)).isFile()) {
            await new Promise(() =>
              copyFile(
                this.getPath(...file.from),
                this.getPath(...to, file.from[file.from.length - 1]),
                (err) => {
                  if (err) {
                    console.error(err);

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
        });
      }),
    );
  }

  async createDir({ path, name }: CreateDirDto): Promise<void> {
    return new Promise<void>(() => {
      mkdir(this.getPath(...path, name), (err) => {
        if (err) {
          console.error(err);
          throw new InternalServerErrorException(
            'Произошла ошибка при создании папки',
          );
        }
      });
    });
  }

  async createFile({ path, name }: CreateDirDto): Promise<void> {
    return new Promise<void>(() => {
      writeFile(this.getPath(...path, name), '', (err) => {
        if (err) {
          console.error(err);
          throw new InternalServerErrorException(
            'Произошла ошибка при создании папки',
          );
        }
      });
    });
  }
}
