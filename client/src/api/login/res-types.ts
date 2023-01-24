import { FileType } from '../../types'

export type OpenDirectoryResponse = FileType[]

export interface SuccessResponse {
  token: string
  message: string
}
