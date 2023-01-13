import { MouseEventHandler } from 'react'
import { StyledFileBlock } from './styled'

import { useFileViewerContext } from '../../../context/file-viewer-context'
import { getIcon } from '../../../utils/file-info/get-file-icon'
import { getDate } from '../../../utils/file-info/get-file-date'
import { getExt } from '../../../utils/file-info/get-file-ext'
import { getSize } from '../../../utils/file-info/get-file-size'
import { useContextMenuContext } from '../../../context/context-menu-context'
import { FileType } from '../../../types'

interface FileBlockProps {
  file: FileType
  selected: boolean
  onContextMenu: (path: string[], x: number, y: number) => void
}

const FileBlock = ({ file, selected, onContextMenu }: FileBlockProps) => {
  const { goNext, downloadFile, clearSelectedFiles, selectFiles } =
    useFileViewerContext()
  const { setShowContextMenu } = useContextMenuContext()

  const onContextMenuHandler: MouseEventHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (!selected) {
      clearSelectedFiles()
    }
    onContextMenu(
      file.path,
      e.clientX + document.documentElement.scrollLeft,
      e.clientY + document.documentElement.scrollTop,
    )
  }

  const onDoubleClicked: MouseEventHandler<HTMLAnchorElement> = async (e) => {
    if (file.isDir) {
      e.preventDefault()

      return await goNext(file.title)
    }

    await downloadFile(file.path, file.title)
  }

  const onClicked: MouseEventHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // FIXME: should not be at here
    setShowContextMenu(false)

    if (!e.ctrlKey) {
      clearSelectedFiles()
    }
    selectFiles([file])
  }

  return (
    <StyledFileBlock
      onClick={onClicked}
      selected={selected}
      onDoubleClick={onDoubleClicked}
      onContextMenu={onContextMenuHandler}
    >
      <div className="main-inf">
        <div className="image-container">
          <img src={getIcon(file.ext, file.isDir)} alt={file.title} />
        </div>

        <span>
          {/* TODO: add better title size clipping */}
          {file.title.length > 18
            ? file.title.slice(0, 18) + '...'
            : file.title}
        </span>
      </div>
      <div>
        <span className="date">{getDate(file.mtime)}</span>
      </div>
      <div>
        <span className="type">{getExt(file)}</span>
      </div>
      {!file.isDir && (
        <div>
          <span className="size">{getSize(file.size)}</span>
        </div>
      )}
    </StyledFileBlock>
  )
}

export default FileBlock
