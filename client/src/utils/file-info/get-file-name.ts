import { FileType } from '../../types'

export function getName(file: FileType) {
  return file.title.slice(0, file.title.lastIndexOf(file.ext))
}
