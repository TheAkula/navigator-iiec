import { StyledContextMenu } from './styled'
import { useFileViewerContext } from '../../../context/file-viewer-context'
import {
  ContextMenuMode,
  useContextMenuContext,
} from '../../../context/context-menu-context'
import { CreateDirModal } from '../../modals/create-dir-modal'
import { CreateFileModal } from '../../modals'
import { useState } from 'react'
import { Modal } from '../../modal'

enum CreateModalMode {
  DIR,
  FILE,
}

export const ContextMenu = () => {
  const {
    copyFiles,
    cutFiles,
    pasteFiles,
    deleteFiles,
    downloadFile,
    selectedFiles,
    buffer,
  } = useFileViewerContext()
  const { mode, coords, setShowContextMenu, show } = useContextMenuContext()
  const [showModal, setShowModal] = useState(false)
  const [createModalMode, setCreateModalMode] =
    useState<CreateModalMode | null>(null)

  const contextMenuOperation =
    <T extends unknown[]>(cb: (...args: T) => void) =>
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
    pasteFiles()
  })

  const onDelete = contextMenuOperation(() => {
    deleteFiles()
  })

  const onDownload = contextMenuOperation(() => {
    if (selectedFiles.length === 1 && !selectedFiles[0].isDir) {
      downloadFile(selectedFiles[0].path, selectedFiles[0].title)
    }
  })

  const onCreateDir = contextMenuOperation(() => {
    setCreateModalMode(CreateModalMode.DIR)
    setShowModal(true)
  })

  const onCreateFile = contextMenuOperation(() => {
    setCreateModalMode(CreateModalMode.FILE)
    setShowModal(true)
  })

  return (
    <>
      {show && (
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
              {selectedFiles.length === 1 && !selectedFiles[0].isDir && (
                <div className="context-menu-block" onClick={onDownload}>
                  <span>Скачать</span>
                </div>
              )}
            </>
          ) : (
            <>
              {!!buffer.length && (
                <div className="context-menu-block" onClick={onPaste}>
                  <span>Вставить</span>
                </div>
              )}
            </>
          )}
          <div className="context-menu-block" onClick={onCreateDir}>
            <span>Создать папку</span>
          </div>
          <div className="context-menu-block" onClick={onCreateFile}>
            <span>Создать файл</span>
          </div>
        </StyledContextMenu>
      )}
      <Modal show={showModal} setShowModal={(v: boolean) => setShowModal(v)}>
        {(f) =>
          createModalMode === CreateModalMode.DIR ? (
            <CreateDirModal setShow={f} />
          ) : createModalMode === CreateModalMode.FILE ? (
            <CreateFileModal setShow={f} />
          ) : null
        }
      </Modal>
    </>
  )
}
