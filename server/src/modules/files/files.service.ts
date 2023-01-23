import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  copyFile,
  cp,
  mkdir,
  readdir,
  rename,
  rm,
  stat,
  Stats,
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
    return new Promise<FileType[]>((res, reject) => {
      return readdir(this.getPath(...path), async (err, content) => {
        if (err) {
          reject(
            new InternalServerErrorException(
              'Произошла ошибка при чтении папки',
            ),
          );
        }
        const files = [];

        for (const file of content) {
          const some = await new Promise<FileType>((resolve, reject) => {
            stat(this.getPath(...path, file), (err, stats) => {
              if (err || !stats) {
                reject(
                  new InternalServerErrorException(
                    'Произошла ошибка при чтении папки',
                  ),
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

  async delete({ files = [] }: DeleteDto): Promise<void> {
    await Promise.all(
      files.map(async (file) => {
        await new Promise<void>(async (_, reject) => {
          const filePath = this.getPath(...file.path);

          let stat: Stats;
          try {
            stat = statSync(filePath);
          } catch (err) {
            return reject(new InternalServerErrorException('Файл не найден'));
          }

          const { isDirectory } = stat;

          if (isDirectory.call(stat)) {
            try {
              await new Promise((_, reject) =>
                rm(filePath, { recursive: true, force: true }, (err) => {
                  if (err) {
                    reject(
                      new InternalServerErrorException(
                        'Произошла ошибка при удалении папки',
                      ),
                    );
                  }
                }),
              );
            } catch (err) {
              reject(err);
            }
          } else {
            try {
              await new Promise((_, reject) =>
                unlink(filePath, (err) => {
                  if (err) {
                    reject(
                      new InternalServerErrorException(
                        'Произошла ошибка при удалении файла',
                      ),
                    );
                  }
                }),
              );
            } catch (err) {
              reject(err);
            }
          }
        });
      }),
    );
  }

  async move({ dest, files }: MoveDto): Promise<void> {
    await Promise.all(
      files.map(async (file) => {
        await new Promise((_, reject) =>
          rename(
            this.getPath(...file.path),
            this.getPath(...dest, file.path[file.path.length - 1]),
            (err) => {
              if (err) {
                console.error(err);

                reject(
                  new InternalServerErrorException(
                    'Произошла ошибка при перемещении файла',
                  ),
                );
              }
            },
          ),
        );
      }),
    );
  }

  async rename({ path, new_name }: RenameDto): Promise<void> {
    await new Promise((_, reject) =>
      rename(
        this.getPath(...path),
        this.getPath(...path.slice(0, path.length - 1).concat(new_name)),
        (err) => {
          if (err) {
            reject(
              new InternalServerErrorException(
                'Произошла ошибка при переименовыании файла',
              ),
            );
          }
        },
      ),
    );
  }

  async copy({ files, to = [] }: CopyDto): Promise<void> {
    await Promise.all(
      files.map(async (file) => {
        await new Promise(async (_, reject) => {
          if (statSync(this.getPath(...file.from)).isFile()) {
            try {
              await new Promise((_, reject) =>
                copyFile(
                  this.getPath(...file.from),
                  this.getPath(...to, file.from[file.from.length - 1]),
                  (err) => {
                    if (err) {
                      console.error(err);

                      reject(
                        new InternalServerErrorException(
                          'Произошла ошибка при копировании файлов',
                        ),
                      );
                    }
                  },
                ),
              );
            } catch (err) {
              reject(err);
            }
          } else {
            try {
              await new Promise((_, reject) => {
                return cp(
                  this.getPath(...file.from),
                  this.getPath(...to),
                  { recursive: true },
                  (err) => {
                    if (err) {
                      console.log(err);

                      reject(
                        new InternalServerErrorException(
                          'Произошла ошибка при копировании папки',
                        ),
                      );
                    }
                  },
                );
              });
            } catch (err) {
              reject(err);
            }
          }
        });
      }),
    );
  }

  async createDir({ path, name }: CreateDirDto): Promise<void> {
    await new Promise<void>((_, reject) => {
      mkdir(this.getPath(...path, name), (err) => {
        if (err) {
          console.error(err);
          reject(
            new InternalServerErrorException(
              'Произошла ошибка при создании папки',
            ),
          );
        }
      });
    });
  }

  async createFile({ path, name }: CreateDirDto): Promise<void> {
    await new Promise<void>((_, reject) => {
      writeFile(this.getPath(...path, name), '', (err) => {
        if (err) {
          console.error(err);
          reject(
            new InternalServerErrorException(
              'Произошла ошибка при создании файла',
            ),
          );
        }
      });
    });
  }
}
