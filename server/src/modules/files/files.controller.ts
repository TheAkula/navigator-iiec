import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { CopyDto } from './dtos/req/copy.dto';
import { DeleteDto } from './dtos/req/delete.dto';
import { GetFileDto } from './dtos/req/get-file.dto';
import { MoveDto } from './dtos/req/move.dto';
import { ReadDirDto } from './dtos/req/read-directory.dto';
import { RenameDto } from './dtos/req/rename.dto';
import { UploadFilesDto } from './dtos/req/upload-files.dto';
import { SuccessDto } from './dtos/res/success.dto';
import { File } from './file';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get('/download-file')
  getFile(@Res() res: Response, @Body() { path }: GetFileDto) {
    return res.download(this.filesService.getPath(path));
  }

  @Get('/read-directory')
  readDir(@Body() readDirDto: ReadDirDto): Promise<File[]> {
    return this.filesService.readDir(readDirDto);
  }

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFile(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() uploadFilesDto: UploadFilesDto,
  ): Promise<SuccessDto> {
    await this.filesService.uploadFiles(uploadFilesDto, files);

    return { message: 'success' };
  }

  @Delete('/delete')
  async delete(@Body() deleteDto: DeleteDto): Promise<SuccessDto> {
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
}
