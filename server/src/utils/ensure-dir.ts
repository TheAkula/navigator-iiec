import { InternalServerErrorException } from '@nestjs/common';
import { existsSync, mkdir } from 'fs';
import { sep } from 'path';

export async function ensureDir(path: string) {
  const dirs = path.split(sep);

  await Promise.all(
    dirs.map((dir, i) => {
      if (dir.length === 0) return null;
      const path = dirs.slice(0, i + 1);
      if (!existsSync('/' + path.join(sep))) {
        return new Promise<void>((res, reject) =>
          mkdir(path.join(sep), (err) => {
            if (err) {
              console.log(err);

              return reject(
                new InternalServerErrorException(
                  'Произошла ошибка при создании папки',
                ),
              );
            }

            res();
          }),
        );
      }
    }),
  );
}
