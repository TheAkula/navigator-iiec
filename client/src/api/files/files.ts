import { endpoints } from '../endpoints'
import { api } from '../init'
import {
  CopyFilesRequest,
  CreateDirRequest,
  CreateFileRequest,
  DeleteFilesRequest,
  DownloadRequest,
  MoveFilesRequest,
  OpenDirectoryRequest,
  RenameFileRequest,
  UploadFilesRequest,
} from './req-types'
import { OpenDirectoryResponse, SuccessResponse } from './res-types'

export const open_directory = async (req: OpenDirectoryRequest) => {
  return api.get<OpenDirectoryResponse>(endpoints.openDirectory, {
    params: req,
  })
}

export const upload_files = async ({ files, dest }: UploadFilesRequest) => {
  const formData = new FormData()

  for (const file of files) {
    formData.append('files', file)
  }

  formData.append('dest', JSON.stringify(dest))

  return api.post<SuccessResponse>(endpoints.upload, formData)
}

export const delete_files = async (req: DeleteFilesRequest) => {
  return api.delete<SuccessResponse>(endpoints.delete, {
    params: req,
  })
}

export const move_files = async (req: MoveFilesRequest) => {
  return api.post<SuccessResponse>(endpoints.move, req)
}

export const rename_file = async (req: RenameFileRequest) => {
  return api.post<SuccessResponse>(endpoints.rename, req)
}

export const copy_files = async (req: CopyFilesRequest) => {
  return api.post<SuccessResponse>(endpoints.copy, req)
}

export const download_file = async (req: DownloadRequest) => {
  return api.get<string>(endpoints.downloadFile, {
    params: req,
  })
}

export const create_dir = async (req: CreateDirRequest) => {
  return api.post<SuccessResponse>(endpoints.createDir, req)
}

export const create_file = async (req: CreateFileRequest) => {
  return api.post<SuccessResponse>(endpoints.createFile, req)
}
