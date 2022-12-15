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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const api_config_service_1 = require("../api-config/api-config.service");
let FilesService = class FilesService {
    constructor(apiConfigService) {
        this.apiConfigService = apiConfigService;
    }
    getPath(...paths) {
        return (0, path_1.join)(this.apiConfigService.getLocalPath(), ...paths);
    }
    async readDir({ path = [] }) {
        return new Promise((res) => {
            return (0, fs_1.readdir)(this.getPath(...path), async (err, content) => {
                if (err) {
                    throw new common_1.InternalServerErrorException('Произошла ошибка при чтении папки');
                }
                const files = [];
                for (const file of content) {
                    const some = await new Promise((resolve) => {
                        (0, fs_1.stat)(this.getPath(...path, file), (err, stats) => {
                            if (err) {
                                throw new common_1.InternalServerErrorException('Произошла ошибка при чтении папки');
                            }
                            const obj = {
                                size: stats.size,
                                isDir: stats.isDirectory(),
                                ext: (0, path_1.extname)(file),
                                title: file,
                                path: [...path, file],
                                mtime: stats.mtimeMs,
                                fullPath: this.getPath(...path, file),
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
    async uploadFiles({ dest }, files) {
        for (const file of files) {
            await new Promise(() => {
                (0, fs_1.rename)((0, path_1.join)(this.apiConfigService.getUploadDest(), file.filename), this.getPath(...dest, file.filename), (err) => {
                    if (err) {
                        throw new common_1.InternalServerErrorException('Произошла ошибка при загрузке файлов');
                    }
                });
            });
        }
        return { message: 'success' };
    }
    async delete({ files }) {
        for (const file of files) {
            const filePath = this.getPath(...file);
            const isDir = (0, fs_1.statSync)(filePath);
            if (isDir) {
                await new Promise(() => {
                    (0, fs_1.rm)(filePath, { recursive: true, force: true }, (err) => {
                        if (err) {
                            throw new common_1.InternalServerErrorException('Произошла ошибка при удалении папки');
                        }
                    });
                });
            }
            else {
                await new Promise(() => (0, fs_1.unlink)(filePath, (err) => {
                    if (err) {
                        throw new common_1.InternalServerErrorException('Произошла ошибка при удалении файла');
                    }
                }));
            }
        }
    }
    async move({ dest, files }) {
        for (const file of files) {
            await new Promise(() => (0, fs_1.rename)(this.getPath(...file.path), this.getPath(...dest, file.path[file.path.length - 1]), (err) => {
                if (err) {
                    console.log(err);
                    throw new common_1.InternalServerErrorException('Произошла ошибка при перемещении файла');
                }
            }));
        }
    }
    async rename({ path, new_name }) {
        return (0, fs_1.rename)(this.getPath(...path), this.getPath(...path.slice(0, path.length - 1).concat(new_name)), (err) => {
            if (err) {
                throw new common_1.InternalServerErrorException('Произошла ошибка при переименовыании файла');
            }
        });
    }
    copyFolderSync(from, to) {
        (0, fs_1.mkdirSync)(to);
        return (0, fs_1.readdirSync)(from).forEach((element) => {
            if ((0, fs_1.lstatSync)(this.getPath(from, element)).isFile()) {
                (0, fs_1.copyFileSync)(this.getPath(from, element), this.getPath(to, element));
            }
            else {
                this.copyFolderSync(this.getPath(from, element), this.getPath(to, element));
            }
        });
    }
    async copy({ files, to = [] }) {
        console.log(files);
        for (const file of files) {
            if (file.from[file.from.length - 2] === to[file.from.length - 1]) {
                throw new common_1.BadRequestException('Конечная папка, в которую следует поместить файлы, является дочерней для папки, в которой они находятся.');
            }
            if ((0, fs_1.statSync)(this.getPath(...file.from)).isFile()) {
                await new Promise(() => (0, fs_1.copyFile)(this.getPath(...file.from), this.getPath(...to, file.from[file.from.length - 1]), (err) => {
                    if (err) {
                        console.log(err);
                        throw new common_1.BadRequestException('Произошла ошибка при копировании файлов');
                    }
                }));
            }
            else {
                await new Promise(() => {
                    return (0, fs_1.cp)(this.getPath(...file.from), this.getPath(...to), { recursive: true }, (err) => {
                        if (err) {
                            throw new common_1.InternalServerErrorException('Произошла ошибка при копировании папки');
                        }
                    });
                });
            }
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_config_service_1.ApiConfigService])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map