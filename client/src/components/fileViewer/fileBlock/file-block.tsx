import {
  DragEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import { StyledFileBlock } from "./styled";
import TxtIcon from "../../../assets/images/txt.png";
import UnknownIcon from "../../../assets/images/unknown.png";
import VideoIcon from "../../../assets/images/video.png";
import ZipIcon from "../../../assets/images/zip.png";
import XlsIcon from "../../../assets/images/xls.png";
import PptIcon from "../../../assets/images/ppt.png";
import PdfIcon from "../../../assets/images/pdf.png";
import AudioIcon from "../../../assets/images/mp3.png";
import ImageIcon from "../../../assets/images/image.png";
import FolderIcon from "../../../assets/images/folder.png";
import DocIcon from "../../../assets/images/doc.png";
import { FileType } from "../../../context/file-viewer";

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

  // const getIcon = (extension: string) => {
  //   const ext = extension.replace(".", "");
  //   if (isDir) {
  //     return FolderIcon;
  //   } else if (IMAGE_EXTENSIONS.includes(ext)) {
  //     return ImageIcon;
  //   } else if (VIDEO_EXTENSIONS.includes(ext)) {
  //     return VideoIcon;
  //   } else if (AUDIO_EXTENSIONS.includes(ext)) {
  //     return AudioIcon;
  //   } else if (ext === "doc" || ext === "docx") {
  //     return DocIcon;
  //   } else if (ext === "ppt") {
  //     return PptIcon;
  //   } else if (ext === "pdf") {
  //     return PdfIcon;
  //   } else if (ext === "txt") {
  //     return TxtIcon;
  //   } else if (ext === "xls") {
  //     return XlsIcon;
  //   } else if (ext === "zip") {
  //     return ZipIcon;
  //   }

  //   return UnknownIcon;
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

  // const getExt = (ext: string) => {
  //   if (isDir) {
  //     return "Папка с файлами";
  //   }
  //   if (!ext) {
  //     return "Файл";
  //   }
  //   return `Файл "${ext.replace(".", "").toUpperCase()}"`;
  // };

  // const getSize = (size: number) => {
  //   const sizes = ["Б", "КБ", "МБ", "ГБ"];
  //   let quantity = 0;
  //   const divide = (num: number): number => {
  //     const newNumber = num / 1024;
  //     if (Math.round(newNumber) > 0) {
  //       quantity += 1;
  //       return newNumber >= 1024 && quantity !== 3
  //         ? divide(newNumber)
  //         : Math.round(newNumber);
  //     }
  //     return num;
  //   };

  //   const num = divide(size);

  //   return num + " " + sizes[quantity];
  // };

  // const getDate = (date: number) => {
  //   const fileDate = new Date(date);
  //   let days: string | number = fileDate.getDate();
  //   if (days < 10) {
  //     days = "0" + days;
  //   }
  //   let months: string | number = fileDate.getMonth() + 1;
  //   if (months < 10) {
  //     months = "0" + months;
  //   }
  //   const years = fileDate.getFullYear();
  //   let hours: string | number = fileDate.getHours();
  //   if (hours < 10) {
  //     hours = "0" + hours;
  //   }
  //   let minutes: string | number = fileDate.getMinutes();
  //   if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }
  //   return `${days}.${months}.${years} ${hours}:${minutes}`;
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
    <div>{file.path.join()}</div>
    // <StyledFileBlock
    //   href={
    //     !isDir
    //       ? "/get-file" + path
    //       : "file:///C:/Users/Pechenka/navigator/server" + path
    //   }
    //   className={selected ? "selected file-block" : "file-block"}
    //   draggable
    //   style={{
    //     cursor: loading ? "wait" : "default",
    //   }}
    //   onClick={onClicked}
    //   onDrop={onDropped}
    //   onDoubleClick={onDoubleClicked}
    //   onDragStart={onDragStart}
    //   onDragEnd={() => {
    //     changeLocalDrag(false);
    //   }}
    //   onContextMenu={onContextMenuHandler}
    // >
    //   <div className="main-inf">
    //     <div className="image-container">
    //       <img src={getIcon(ext)} alt={ext} />
    //     </div>
    //     {!isRenamed ? (
    //       <span>{title.length > 18 ? title.slice(0, 18) + "..." : title}</span>
    //     ) : (
    //       <input
    //         autoFocus
    //         onBlur={onBlured}
    //         defaultValue={title}
    //         onKeyDown={onKeyDown}
    //       />
    //     )}
    //   </div>
    //   <div>
    //     <span className="date">{getDate(mtime)}</span>
    //   </div>
    //   <div>
    //     <span className="type">{getExt(ext)}</span>
    //   </div>
    //   {!isDir && (
    //     <div>
    //       <span className="size">{getSize(size)}</span>
    //     </div>
    //   )}
    // </StyledFileBlock>
  );
};

export default FileBlock;
