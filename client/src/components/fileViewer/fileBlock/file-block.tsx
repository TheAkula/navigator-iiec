import {
  DragEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'
import { StyledFileBlock } from './styled'

import { FileType } from '../../../context/file-viewer'
import { getIcon } from '../../../utils/file-info/get-file-icon'
import { getDate } from '../../../utils/file-info/get-file-date'
import { getExt } from '../../../utils/file-info/get-file-ext'
import { getSize } from '../../../utils/file-info/get-file-size'

interface FileBlockProps {
  file: FileType;
  selected: boolean;
  onContextMenu: (path: string[], x: number, y: number) => void;
}

const FileBlock = ({ file, selected, onContextMenu }: FileBlockProps) => {
  // const onContextMenuHandler: MouseEventHandler = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   onContextMenu(
  //     file.path,
  //     e.clientX + document.documentElement.scrollLeft,
  //     e.clientY + document.documentElement.scrollTop
  //   );
  // };

  // const onDoubleClicked: MouseEventHandler<HTMLAnchorElement> = (e) => {
  //   if (isDir) {
  //     e.preventDefault();
  //     return changePath(path + "/");
  //   }
  //   const link = document.createElement("a");
  //   link.href = "/get-file" + path;
  //   link.click();
  // };

  // const onClicked: MouseEventHandler = (e) => {
  //   e.preventDefault();
  //   selectedFile(path, e.ctrlKey, isDir);
  // };

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

  // const onBlured: FocusEventHandler<HTMLInputElement> = (e) => {
  //   renamed(e.target.value);
  // };

  // const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
  //   if (e.key === "Enter") {
  //     (e.target as HTMLInputElement).blur();
  //   }
  // };

  return (
    // <div>{file.path.join()}</div>
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
    // onClick={onClicked}
    // onDrop={onDropped}
    // onDoubleClick={onDoubleClicked}
    // onDragStart={onDragStart}
    // onDragEnd={() => {
    //   changeLocalDrag(false);
    // }}
    // onContextMenu={onContextMenuHandler}
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
