import { FileType } from '../../context/file-viewer-context'
import {
  AUDIO_EXTENSIONS,
  IMAGE_EXTENSIONS,
  VIDEO_EXTENSIONS,
} from '../constants'
import TxtIcon from '../../assets/images/txt.png'
import UnknownIcon from '../../assets/images/unknown.png'
import VideoIcon from '../../assets/images/video.png'
import ZipIcon from '../../assets/images/zip.png'
import XlsIcon from '../../assets/images/xls.png'
import PptIcon from '../../assets/images/ppt.png'
import PdfIcon from '../../assets/images/pdf.png'
import AudioIcon from '../../assets/images/mp3.png'
import ImageIcon from '../../assets/images/image.png'
import FolderIcon from '../../assets/images/folder.png'
import DocIcon from '../../assets/images/doc.png'

export const getIcon = ({ ext, isDir }: FileType): string => {
  const extension = ext.replace('.', '')

  if (isDir) {
    return FolderIcon
  } else if (IMAGE_EXTENSIONS.includes(extension)) {
    return ImageIcon
  } else if (VIDEO_EXTENSIONS.includes(extension)) {
    return VideoIcon
  } else if (AUDIO_EXTENSIONS.includes(extension)) {
    return AudioIcon
  } else if (extension === 'doc' || extension === 'docx') {
    return DocIcon
  } else if (extension === 'ppt') {
    return PptIcon
  } else if (extension === 'pdf') {
    return PdfIcon
  } else if (extension === 'txt') {
    return TxtIcon
  } else if (extension === 'xls') {
    return XlsIcon
  } else if (extension === 'zip') {
    return ZipIcon
  }

  return UnknownIcon
}
