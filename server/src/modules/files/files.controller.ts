import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createReadStream } from 'fs';
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
import { DtoPlace, FileAccessGuard } from 'src/guards/file-access.guard';
import { CreateDirDto } from './dtos/req/create-dir.dto';
import { CreateFileDto } from './dtos/req/create-file.dto';
import { diskStorage } from 'multer';
import { dirname, join, sep } from 'path';
import { ensureDir } from 'src/utils';

//  TODO: add auth on client and then uncomment this
@UseGuards(JwtAuthGuard)
@Controller()
export class FilesController {
  constructor(private filesService: FilesService) {}

  @UseGuards(FileAccessGuard(GetFileDto, DtoPlace.QUERY))
  @Get('/download-file')
  getFile(@Res() res: Response, @Query() { path }: GetFileDto) {
    const file = createReadStream(this.filesService.getPath(...path));

    file.pipe(res);
  }

  @UseGuards(FileAccessGuard(ReadDirDto, DtoPlace.QUERY))
  @Get('/read-directory')
  readDir(@Query() readDirDto: ReadDirDto): Promise<FileType[]> {
    return this.filesService.readDir(readDirDto);
  }

  @UseGuards(FileAccessGuard(UploadFilesDto, DtoPlace.BODY))
  @Post('/upload')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
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

  @UseGuards(FileAccessGuard(DeleteDto, DtoPlace.QUERY))
  @Delete('/delete')
  async delete(@Query() deleteDto: DeleteDto): Promise<SuccessDto> {
    await this.filesService.delete(deleteDto);

    return { message: 'success' };
  }

  @UseGuards(FileAccessGuard(MoveDto, DtoPlace.BODY))
  @Post('/move')
  async move(@Body() moveDto: MoveDto): Promise<SuccessDto> {
    await this.filesService.move(moveDto);

    return { message: 'success' };
  }

  @UseGuards(FileAccessGuard(RenameDto, DtoPlace.BODY))
  @Post('/rename')
  async rename(@Body() renameDto: RenameDto): Promise<SuccessDto> {
    await this.filesService.rename(renameDto);

    return { message: 'success' };
  }

  @UseGuards(FileAccessGuard(CopyDto, DtoPlace.BODY))
  @Post('/copy')
  async copy(@Body() copyDto: CopyDto): Promise<SuccessDto> {
    await this.filesService.copy(copyDto);

    return { message: 'success' };
  }

  @UseGuards(FileAccessGuard(CreateDirDto, DtoPlace.BODY))
  @Post('/create-dir')
  async createDir(@Body() createDirDto: CreateDirDto): Promise<SuccessDto> {
    await this.filesService.createDir(createDirDto);

    return { message: 'success' };
  }

  @UseGuards(FileAccessGuard(CreateFileDto, DtoPlace.BODY))
  @Post('/create-file')
  async createFile(@Body() createFileDto: CreateFileDto): Promise<SuccessDto> {
    await this.filesService.createFile(createFileDto);

    return { message: 'success' };
  }
}
