"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const copy_dto_1 = require("./dtos/req/copy.dto");
const delete_dto_1 = require("./dtos/req/delete.dto");
const get_file_dto_1 = require("./dtos/req/get-file.dto");
const move_dto_1 = require("./dtos/req/move.dto");
const read_directory_dto_1 = require("./dtos/req/read-directory.dto");
const rename_dto_1 = require("./dtos/req/rename.dto");
const upload_files_dto_1 = require("./dtos/req/upload-files.dto");
const files_service_1 = require("./files.service");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    getFile(res, { path }) {
        return res.download(this.filesService.getPath(...path));
    }
    readDir(readDirDto) {
        return this.filesService.readDir(readDirDto);
    }
    async uploadFile(files, uploadFilesDto) {
        await this.filesService.uploadFiles(uploadFilesDto, files);
        return { message: 'success' };
    }
    async delete(deleteDto) {
        await this.filesService.delete(deleteDto);
        return { message: 'success' };
    }
    async move(moveDto) {
        await this.filesService.move(moveDto);
        return { message: 'success' };
    }
    async rename(renameDto) {
        await this.filesService.rename(renameDto);
        return { message: 'success' };
    }
    async copy(copyDto) {
        await this.filesService.copy(copyDto);
        return { message: 'success' };
    }
};
__decorate([
    (0, common_1.Get)('/download-file'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_file_dto_1.GetFileDto]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('/read-directory'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [read_directory_dto_1.ReadDirDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "readDir", null);
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, upload_files_dto_1.UploadFilesDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_dto_1.DeleteDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/move'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [move_dto_1.MoveDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "move", null);
__decorate([
    (0, common_1.Post)('/rename'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rename_dto_1.RenameDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "rename", null);
__decorate([
    (0, common_1.Post)('/copy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [copy_dto_1.CopyDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "copy", null);
FilesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map