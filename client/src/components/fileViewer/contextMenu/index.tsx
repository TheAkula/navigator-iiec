import { StyledContextMenu } from './styled'
import { SelectedFile } from '../../main'

interface ContextMenuProps {
  files: SelectedFile[];
  isDir: boolean;
  pos: [number, number];
  closeContextMenu: () => void;
  onCutFiles: () => void;
  setLoading: (l: boolean) => void;
  onCopyFiles: () => void;
  onRenameFile: (p: string) => void;
  onDeleteFile: () => void;
  isHaveCopiedFiles: boolean;
  onCreate: () => void;
  onUpdate: () => void;
  onPaste: () => void;
}

export const ContextMenu = ({
  files,
  pos,
  closeContextMenu,
  onCutFiles,
  onCopyFiles,
  onRenameFile,
  onDeleteFile,
  isHaveCopiedFiles,
  onUpdate,
  onPaste,
}: ContextMenuProps) => {
  const cutFiles = () => {
    closeContextMenu()
    onCutFiles()
  }

  const copyFiles = () => {
    closeContextMenu()
    onCopyFiles()
  }

  const renameFile = () => {
    onRenameFile(files[0].path)
    closeContextMenu()
  }

  const update = () => {
    onUpdate()
    closeContextMenu()
  }

  const paste = () => {
    closeContextMenu()
    onPaste()
  }

  return (
    <StyledContextMenu
      style={{ left: pos[0] + 'px', top: pos[1] + 'px' }}
      id="context-menu"
    >
      {files.length ? (
        <>
          <div className="context-menu-block" onClick={onDeleteFile}>
            <span>Удалить</span>
          </div>
          <div className="context-menu-block" onClick={cutFiles}>
            <span>Вырезать</span>
          </div>
          <div className="context-menu-block" onClick={copyFiles}>
            <span>Копировать</span>
          </div>
          {files.length === 1 && (
            <div className="context-menu-block" onClick={renameFile}>
              <span>Переименовать</span>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="context-menu-block">
            <span>Создать</span>
          </div>
          <div className="context-menu-block" onClick={update}>
            <span>Обновить</span>
          </div>
          {isHaveCopiedFiles && (
            <div className="context-menu-block" onClick={paste}>
              <span>Вставить</span>
            </div>
          )}
        </>
      )}
    </StyledContextMenu>
  )
}
