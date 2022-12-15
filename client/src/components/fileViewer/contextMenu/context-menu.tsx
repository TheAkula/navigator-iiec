import { StyledContextMenu } from './styled'
import { SelectedFile } from '../../main'
import { useFileViewerContext } from '../../../context/file-viewer-context'
import { ContextMenuMode, useContextMenuContext } from '../../../context/context-menu-context'

export const ContextMenu = () => {
  const { copyFiles, cutFiles, pasteFiles, path, selectedFiles } = useFileViewerContext()
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

  // const renameFile = () => {
  //   onRenameFile(files[0].path)
  //   closeContextMenu()
  // }

  // const update = () => {
  //   onUpdate()
  //   closeContextMenu()
  // }

  return (
    <StyledContextMenu
      style={{ left: coords[0] + 'px', top: coords[1] + 'px' }}
      id="context-menu"
    // onClick={(e) => e.stopPropagation()}
    >
      {mode === ContextMenuMode.FILE ? (
        <>
          {/* <div className="context-menu-block" onClick={onDeleteFile}>
            <span>Удалить</span>
          </div> */}
          <div className="context-menu-block" onClick={onCut}>
            <span>Вырезать</span>
          </div>
          <div className="context-menu-block" onClick={onCopy}>
            <span>Копировать</span>
          </div>
          {/* {selectedFiles.length === 1 && (
            <div className="context-menu-block" onClick={renameFile}>
              <span>Переименовать</span>
            </div>
          )} */}
        </>
      ) : (
        <>
          <div className="context-menu-block">
            <span>Создать</span>
          </div>
          {/* <div className="context-menu-block" onClick={update}>
            <span>Обновить</span>
          </div> */}
          {(
            <div className="context-menu-block" onClick={onPaste}>
              <span>Вставить</span>
            </div>
          )}
        </>
      )}
    </StyledContextMenu>
  )
}
