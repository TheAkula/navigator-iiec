import { FileType } from '../../context/file-viewer'

export type OpenDirectoryResponse = FileType[];

export interface SuccessResponse {
  message: string;
}
