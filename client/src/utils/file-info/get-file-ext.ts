import { FileType } from '../../types'

export const getExt = (file: FileType) => {
  if (file.isDir) {
    return 'Папка с файлами'
  }

  if (!file.ext) {
    return 'Файл'
  }

  return `Файл "${file.ext.replace('.', '').toUpperCase()}"`
}
