import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Post,
  Query,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response, Request } from 'express';
import { createReadStream } from 'fs';
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

@Controller()
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get('/download-file')
  getFile(@Res() res: Response, @Query() { path }: GetFileDto) {
    const file = createReadStream(this.filesService.getPath(...path));
    file.pipe(res);
  }

  @Get('/read-directory')
  readDir(@Query() readDirDto: ReadDirDto): Promise<FileType[]> {
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
  async copy(
    @Body() copyDto: CopyDto,
    @Req() req: Request,
  ): Promise<SuccessDto> {
    console.log(req);

    await this.filesService.copy(copyDto);

    return { message: 'success' };
  }
}
