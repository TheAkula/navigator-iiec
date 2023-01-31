import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Res,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createReadStream, Stats } from 'fs';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CopyDto } from './dtos/req/copy.dto';
import { DeleteDto } from './dtos/req/delete.dto';
import { GetFileDto } from './dtos/req/get-file.dto';
import { MoveDto } from './dtos/req/move.dto';
import { ReadDirDto } from './dtos/req/read-directory.dto';
import { RenameDto } from './dtos/req/rename.dto';
import { UploadFilesDto } from './dtos/req/upload-files.dto';
import { SuccessDto } from './dtos/res/success.dto';
import { FileType } from './file';
import { FilesService } from './files.service';
import { CreateDirDto } from './dtos/req/create-dir.dto';
import { CreateFileDto } from './dtos/req/create-file.dto';
import { diskStorage } from 'multer';
import { dirname, join, sep } from 'path';
import { ensureDir } from 'src/utils';
import { FileAccessPipe } from 'src/pipes/file-access.pipe';
import { statSync } from 'fs'

@UseGuards(JwtAuthGuard)
@UsePipes(FileAccessPipe)
@Controller()
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get('/download-file')
  getFile(@Res() res: Response, @Query() { path }: GetFileDto) {
		const filePath = this.filesService.getPath(...path)

		let stats: Stats;
		try {
			stats = statSync(filePath)
		} catch (err) {
			throw new BadRequestException('Файл не найден')
		}
		
    const file = createReadStream(filePath);
		res.setHeader('Content-Length', stats.size);
		
    file.pipe(res);
  }

  @Get('/read-directory')
  readDir(@Query() readDirDto: ReadDirDto): Promise<FileType[]> {
    return this.filesService.readDir(readDirDto);
  }

  @Post('/upload')
  @UseInterceptors(
    FilesInterceptor('files', undefined, {
      storage: diskStorage({
        async destination(req, file, callback) {
          const relativePath = file.originalname.replace(/@/g, sep);

          const index = relativePath.lastIndexOf(sep);
          const fileDir = join(
            dirname(require.main.filename),
            '../../files',
            ...(req.query.dest as string[]),
            relativePath.substring(0, index),
          );

          await ensureDir(fileDir);

          return callback(null, fileDir);
        },
        filename(_, file, callback) {
          return callback(
            null,
            file.originalname.substring(file.originalname.lastIndexOf('@') + 1),
          );
        },
      }),
    }),
  )
  async uploadFile(
    @Query() uploadFilesDto: UploadFilesDto,
  ): Promise<SuccessDto> {
    return { message: 'success' };
  }

  @Delete('/delete')
  async delete(@Query() deleteDto: DeleteDto): Promise<SuccessDto> {
    await this.filesService.delete(deleteDto);

    return { message: 'success' };
  }

  @Post('/move')
  async move(@Body() moveDto: MoveDto): Promise<SuccessDto> {
    await this.filesService.move(moveDto);

    return { message: 'success' };
  }

  @Post('/rename')
  async rename(@Body() renameDto: RenameDto): Promise<SuccessDto> {
    await this.filesService.rename(renameDto);

    return { message: 'success' };
  }

  @Post('/copy')
  async copy(@Body() copyDto: CopyDto): Promise<SuccessDto> {
    await this.filesService.copy(copyDto);

    return { message: 'success' };
  }

  @Post('/create-dir')
  async createDir(@Body() createDirDto: CreateDirDto): Promise<SuccessDto> {
    await this.filesService.createDir(createDirDto);

    return { message: 'success' };
  }

  @Post('/create-file')
  async createFile(@Body() createFileDto: CreateFileDto): Promise<SuccessDto> {
    await this.filesService.createFile(createFileDto);

    return { message: 'success' };
  }
}
