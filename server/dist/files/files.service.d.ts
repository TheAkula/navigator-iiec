/// <reference types="multer" />
import { ApiConfigService } from '../api-config/api-config.service';
import { CopyDto } from './dtos/req/copy.dto';
import { DeleteDto } from './dtos/req/delete.dto';
import { MoveDto } from './dtos/req/move.dto';
import { ReadDirDto } from './dtos/req/read-directory.dto';
import { RenameDto } from './dtos/req/rename.dto';
import { UploadFilesDto } from './dtos/req/upload-files.dto';
import { SuccessDto } from './dtos/res/success.dto';
import { FileType } from './file';
export declare class FilesService {
    private apiConfigService;
    constructor(apiConfigService: ApiConfigService);
    getPath(...paths: string[]): string;
    readDir({ path }: ReadDirDto): Promise<FileType[]>;
    uploadFiles({ dest }: UploadFilesDto, files: Express.Multer.File[]): Promise<SuccessDto>;
    delete({ files }: DeleteDto): Promise<void>;
    move({ dest, files }: MoveDto): Promise<void>;
    rename({ path, new_name }: RenameDto): Promise<void>;
    private copyFolderSync;
    copy({ files, to }: CopyDto): Promise<void>;
}
