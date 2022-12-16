export interface OpenDirectoryRequest {
  path: string[]
}

export interface UploadFilesRequest {
  files: File[]
  dest: string[]
}

export interface DeleteFileItem {
  path: string[]
}

export interface DeleteFilesRequest {
  files: DeleteFileItem[]
}

export interface MoveFilesItem {
  path: string[]
}

export interface MoveFilesRequest {
  files: MoveFilesItem[]
  dest: string[]
}

export interface RenameFileRequest {
  path: string[]
  newName: string
}

export interface CopyFilesItem {
  from: string[]
}

export interface CopyFilesRequest {
  files: CopyFilesItem[]
  dest: string[]
}

export interface DownloadRequest {
  path: string[]
}
