import { StyledContextMenu } from './styled'
import { useFileViewerContext } from '../../../context/file-viewer-context'
import {
  ContextMenuMode,
  useContextMenuContext,
} from '../../../context/context-menu-context'
import { CreateFileModal, CreateDirModal, UploadFilesModal } from '../../modals'
import { ChangeEvent, useState } from 'react'
import { Modal } from '../../modal'

enum ModalMode {
  DIR,
  FILE,
  UPLOAD,
}

export const ContextMenu = () => {
  const {
    copyFiles,
    cutFiles,
    pasteFiles,
    deleteFiles,
    downloadFile,
    selectedFiles,
    addToNativeBuffer,
    clearNativeBuffer,
    buffer,
  } = useFileViewerContext()
  const { mode, coords, setShowContextMenu, show } = useContextMenuContext()
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState<ModalMode | null>(null)

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
    setModalMode(ModalMode.DIR)
    setShowModal(true)
  })

  const onCreateFile = contextMenuOperation(() => {
    setModalMode(ModalMode.FILE)
    setShowModal(true)
  })

  const onUpload = contextMenuOperation(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true

    // FIXME: **** typescript
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    input.onchange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        addToNativeBuffer([...e.target.files])
        setShowModal(true)
        setModalMode(ModalMode.UPLOAD)
      } else {
        clearNativeBuffer()
      }
    }

    input.click()
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
          <div className="context-menu-block" onClick={onUpload}>
            <span>Загрузить файлы</span>
          </div>
        </StyledContextMenu>
      )}
      <Modal show={showModal} setShowModal={(v: boolean) => setShowModal(v)}>
        {(f) =>
          modalMode === ModalMode.DIR ? (
            <CreateDirModal setShow={f} />
          ) : modalMode === ModalMode.FILE ? (
            <CreateFileModal setShow={f} />
          ) : modalMode === ModalMode.UPLOAD ? (
            <UploadFilesModal setShow={f} />
          ) : null
        }
      </Modal>
    </>
  )
}
