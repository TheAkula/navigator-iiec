import { StyledContextMenu } from './styled'
import { SelectedFile } from '../../main'
import { useFileViewerContext } from '../../../context/file-viewer-context'
import { ContextMenuMode, useContextMenuContext } from '../../../context/context-menu-context'

export const ContextMenu = () => {
  const { copyFiles, cutFiles, pasteFiles, path, deleteFiles, downloadFile, selectedFiles } = useFileViewerContext()
  const { mode, coords, setShowContextMenu } = useContextMenuContext()

  const contextMenuOperation = <T extends unknown[]>(cb: (...args: T) => void) =>
    (...args: T) => {
      cb(...args)
      setShowContextMenu(false)
    }

  const onCopy = contextMenuOperation(() => {
    copyFiles()
  })

  const onCut = contextMenuOperation(() => {
    cutFiles()
  })

  const onPaste = contextMenuOperation(() => {
    pasteFiles(path)
  })

  const onDelete = contextMenuOperation(() => {
    deleteFiles()
  })

  const onDownload = contextMenuOperation(() => {
    if (selectedFiles.length === 1 && !selectedFiles[0].isDir) {
      downloadFile(selectedFiles[0].path, selectedFiles[0].title)
    }
  })

  return (
    <StyledContextMenu
      style={{ left: coords[0] + 'px', top: coords[1] + 'px' }}
      id="context-menu"
    >
      {mode === ContextMenuMode.FILE ? (
        <>
          <div className="context-menu-block" onClick={onDelete}>
            <span>Удалить</span>
          </div>
          <div className="context-menu-block" onClick={onCut}>
            <span>Вырезать</span>
          </div>
          <div className="context-menu-block" onClick={onCopy}>
            <span>Копировать</span>
          </div>
          {selectedFiles.length === 1 && !selectedFiles[0].isDir &&
            <div className="context-menu-block" onClick={onDownload}>
              <span>Скачать</span>
            </div>}
        </>
      ) : (
        <>
          <div className="context-menu-block">
            <span>Создать</span>
          </div>

          <div className="context-menu-block" onClick={onPaste}>
            <span>Вставить</span>
          </div>

        </>
      )}
    </StyledContextMenu>
  )
}
