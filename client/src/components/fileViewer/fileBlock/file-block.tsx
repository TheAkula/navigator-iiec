import {
  DragEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'
import { StyledFileBlock } from './styled'

import { FileType, useFileViewerContext } from '../../../context/file-viewer-context'
import { getIcon } from '../../../utils/file-info/get-file-icon'
import { getDate } from '../../../utils/file-info/get-file-date'
import { getExt } from '../../../utils/file-info/get-file-ext'
import { getSize } from '../../../utils/file-info/get-file-size'
import { useContextMenuContext } from '../../../context/context-menu-context'

interface FileBlockProps {
  file: FileType;
  selected: boolean;
  onContextMenu: (path: string[], x: number, y: number) => void;
}

const FileBlock = ({ file, selected, onContextMenu }: FileBlockProps) => {
  const { goNext, downloadFile, clearSelectedFiles, selectFiles } = useFileViewerContext()
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
      e.clientY + document.documentElement.scrollTop
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

  // const onDragStart: DragEventHandler<HTMLAnchorElement> = (e) => {
  //   if (!selected) {
  //     selectedFile(path, false, isDir);
  //   }
  //   changeLocalDrag(true);
  //   let download_url_data =
  //     "application/octet-stream:" +
  //     title +
  //     "/get-file" +
  //     path.replaceAll("\\", "/");
  //   e.dataTransfer.setData("DownloadURL", download_url_data);
  //   e.dataTransfer.effectAllowed = "copy";
  // };


  // const onDropped: DragEventHandler = (e) => {
  //   e.preventDefault();
  //   const files = [...e.dataTransfer!.files];
  //   if (isDir) {
  //     onDrop(title, files);
  //   }
  // };

  return (
    <StyledFileBlock
      // href={
      //   !isDir
      //     ? "/get-file" + path
      //     : "file:///C:/Users/Pechenka/navigator/server" + path
      // }
      // className={selected ? "selected file-block" : "file-block"}
      // draggable
      // style={{
      //   cursor: loading ? "wait" : "default",
      // }}
      onClick={onClicked}
      selected={selected}
      // onDrop={onDropped}
      onDoubleClick={onDoubleClicked}
      // onDragStart={onDragStart}
      // onDragEnd={() => {
      //   changeLocalDrag(false);
      // }}
      onContextMenu={onContextMenuHandler}
    >
      <div className="main-inf">
        <div className="image-container">
          <img src={getIcon(file)} alt={file.title} />
        </div>
        {/* {!isRenamed ? ( */}
        <span>{file.title.length > 18 ? file.title.slice(0, 18) + '...' : file.title}</span>
        {/* ) : (
          <input
            autoFocus
            onBlur={onBlured}
            defaultValue={title}
            onKeyDown={onKeyDown}
          />
        )} */}
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
