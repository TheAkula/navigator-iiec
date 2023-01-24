import { InternalServerErrorException } from '@nestjs/common';
import { existsSync, mkdir } from 'fs';
import { sep } from 'path';

export async function ensureDir(path: string) {
  const dirs = path.split(sep);

  for (let i = 0; i < dirs.length; ++i) {
    if (dirs[i].length === 0) continue;
    const path = dirs.slice(0, i + 1);
    if (!existsSync('/' + path.join(sep))) {
      await new Promise((_, reject) =>
        mkdir(path.join(sep), (err) => {
          if (err) {
            console.log(err);

            reject(
              new InternalServerErrorException(
                'Произошла ошибка при создании папки',
              ),
            );
          }
        }),
      );
    }
  }
}
