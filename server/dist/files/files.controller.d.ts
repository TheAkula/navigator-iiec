/// <reference types="multer" />
import { Response, Request } from 'express';
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
export declare class FilesController {
    private filesService;
    constructor(filesService: FilesService);
    getFile(res: Response, { path }: GetFileDto): void;
    readDir(readDirDto: ReadDirDto): Promise<FileType[]>;
    uploadFile(files: Express.Multer.File[], uploadFilesDto: UploadFilesDto): Promise<SuccessDto>;
    delete(deleteDto: DeleteDto): Promise<SuccessDto>;
    move(moveDto: MoveDto): Promise<SuccessDto>;
    rename(renameDto: RenameDto): Promise<SuccessDto>;
    copy(copyDto: CopyDto, req: Request): Promise<SuccessDto>;
}
