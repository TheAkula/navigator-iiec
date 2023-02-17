import {
  AUDIO_EXTENSIONS,
  IMAGE_EXTENSIONS,
  VIDEO_EXTENSIONS,
} from '../constants'

export const getIcon = (ext: string, isDir: boolean): string => {
  const extension = ext.replace('.', '')

  if (isDir) {
    return 'images/folder.png'
  } else if (IMAGE_EXTENSIONS.includes(extension)) {
    return 'images/image.png'
  } else if (VIDEO_EXTENSIONS.includes(extension)) {
    return 'images/video.png'
  } else if (AUDIO_EXTENSIONS.includes(extension)) {
    return 'images/mp3.png'
  } else if (extension === 'doc' || extension === 'docx') {
    return 'images/doc.png'
  } else if (extension === 'ppt') {
    return 'images/ppt.png'
  } else if (extension === 'pdf') {
    return 'images/pdf.png'
  } else if (extension === 'txt') {
    return '/images/txt.png'
  } else if (extension === 'xls') {
    return 'images/xls.png'
  } else if (extension === 'zip') {
    return 'images/zip.png'
  }

  return 'images/unknown.png'
}
