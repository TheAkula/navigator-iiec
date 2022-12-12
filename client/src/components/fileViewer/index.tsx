export {}
// import {
//   MouseEventHandler,
//   useCallback,
//   useEffect,
//   useState,
//   Dispatch,
//   SetStateAction,
// } from "react";
// import BackFileBlock from "./backFileBlock";
// import FileBlock from "./fileBlock/file-block";
// import Header from "./header";
// import { Modal } from "../modal";
// import { ContextMenu } from "./contextMenu";
// import { StyledFileViewer } from "./styled";
// import { FileType, SelectedFile } from "../main";

// interface FileViewerProps {
//   path: string;
//   changePath: (p: string) => void;
//   prevPath: string | null;
//   setLoading: (l: boolean) => void;
//   loading: boolean;
//   files: FileType[] | null;
//   selectedFiles: SelectedFile[];
//   update: () => void;
//   changeSelectedFiles: Dispatch<SetStateAction<SelectedFile[]>>;
// }

// export interface SortType {
//   name: keyof FileType;
//   reverse: boolean;
// }

// interface CopiedFiles {
//   items: SelectedFile[];
//   type: "cut" | "copy";
// }

// interface RenamedFile {
//   oldPath: string;
//   newTitle: string | null;
// }

// interface ModalType {
//   onAgree: MouseEventHandler<HTMLButtonElement>;
//   onCancel: MouseEventHandler<HTMLButtonElement>;
//   content: string;
// }

// const FileViewer = ({
//   path,
//   changePath,
//   prevPath,
//   setLoading,
//   files,
//   selectedFiles,
//   update,
//   loading,
//   changeSelectedFiles,
// }: FileViewerProps) => {
//   const [sortType, setSortType] = useState<SortType>({
//     name: "title",
//     reverse: false,
//   });
//   const [modal, setModal] = useState<null | ModalType>(null);
//   const [filesToUpload, setFilesToUpload] = useState<null | File[]>(null);
//   const [showContextMenu, setShowContextMenu] = useState(false);
//   const [contextMenu, setContextMenu] = useState<null | {
//     isDir: boolean;
//     pos: [number, number];
//   }>(null);
//   const [targetToUpload, setTargetToUpload] = useState("");
//   const [copiedFiles, setCopiedFiles] = useState<CopiedFiles | null>(null);
//   const [renamedFile, setRenamedFile] = useState<null | RenamedFile>(null);
//   const [isLocalDrag, setIsLocalDrag] = useState(false);

//   const uploadFiles = useCallback(() => {
//     // if (copiedFiles && copiedFiles.items.length) {
//     //   setLoading(true);
//     //   setModal(null);
//     //   Promise.all(
//     //     copiedFiles.items.map((file) => {
//     //       const fullPath = files.find((f) => {
//     //         return f.path === file.path;
//     //       })!.fullPath;

//     //       return fetch("/move-file", {
//     //         method: "POST",
//     //         body: JSON.stringify({
//     //           oldPath: fullPath,
//     //           newPath: path + "/" + targetToUpload,
//     //         }),
//     //         headers: {
//     //           "Content-Type": "application/json",
//     //         },
//     //       });
//     //     })
//     //   ).finally(() => {
//     //     update();
//     //     setLoading(false);
//     //     setTargetToUpload("");
//     //   });
//     // }
//     setModal(null);
//     if (filesToUpload && filesToUpload.length) {
//       setLoading(true);
//       Promise.all(
//         filesToUpload!.map((file) => {
//           let formData = new FormData();
//           formData.append("file", file);
//           formData.append("path", path + "/" + targetToUpload);
//           return fetch("/upload-file", {
//             method: "POST",
//             body: formData,
//           });
//         })
//       ).finally(() => {
//         setLoading(false);
//         update();
//         setFilesToUpload(null);
//         setTargetToUpload("");
//       });
//     }
//   }, [filesToUpload, path, setLoading, targetToUpload, update]);

//   const changeLocalDrag = (d: boolean) => {
//     setIsLocalDrag(d);
//   };

//   const onCloseContextMenu = () => {
//     setShowContextMenu(false);
//     setContextMenu(null);
//   };

//   const onContextMenuFile = (
//     path: string,
//     isDir: boolean,
//     pos: [number, number]
//   ) => {
//     const isSel =
//       selectedFiles.findIndex((file) => {
//         return file.path === path;
//       }) !== -1;
//     if (!isSel && selectedFiles.length) {
//       changeSelectedFiles([]);
//     } else if (!isSel) {
//       changeSelectedFiles((prevSelectedFiles) => {
//         return [{ path: path, isDir: isDir }];
//       });
//     }
//     setShowContextMenu(true);
//     setContextMenu({ isDir: isDir, pos: pos });
//   };

//   const onCancelUpload = () => {
//     setFilesToUpload(null);
//     setModal(null);
//     setTargetToUpload("");
//   };

//   const moveFiles = useCallback(async () => {
//     setLoading(true);
//     const target =
//       selectedFiles.length === 1 && selectedFiles[0].isDir
//         ? selectedFiles[0].path
//         : path;
//     if (copiedFiles) {
//       const p = copiedFiles!.type === "copy" ? "/copy-file" : "/move-file";
//       return Promise.all(
//         copiedFiles!.items
//           .filter((cp) => cp.path !== "...")
//           .map((file) => {
//             return fetch(p, {
//               method: "POST",
//               body: JSON.stringify({
//                 oldPath: file.path,
//                 newPath: target,
//               }),
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             });
//           })
//       )
//         .then((data) => {
//           setCopiedFiles((prevCopiedFiles) => null);
//           setLoading(false);
//           update();
//         })
//         .catch((err) => {
//           setLoading(false);
//           console.log(err);
//         })
//         .finally(() => {
//           setCopiedFiles((prevCopiedFiles) => null);
//           setLoading(false);
//         });
//     }
//   }, [copiedFiles, path, setLoading, selectedFiles, update]);

//   const onUploadFiles: (ev: DragEvent) => void = useCallback(
//     (e) => {
//       setModal({
//         onAgree: isLocalDrag ? moveFiles : uploadFiles,
//         onCancel: onCancelUpload,
//         content: `Скопировать выбранные файлы в ${path + "/" + targetToUpload}`,
//       });
//       if (isLocalDrag && selectedFiles.length) {
//         return setCopiedFiles((prevCopiedFiles) => {
//           return { items: selectedFiles, type: "cut" };
//         });
//       }
//       const files = [...e.dataTransfer!.files];
//       setFilesToUpload((prevFilesToUpload) => files);
//     },
//     [isLocalDrag, selectedFiles, uploadFiles, path, targetToUpload, moveFiles]
//   );

//   const onMouseClicked: EventListenerOrEventListenerObject = useCallback(
//     (e) => {
//       if (!(e.target as HTMLElement).closest("#context-menu")) {
//         setContextMenu(null);
//         setShowContextMenu(false);
//       }
//       if (!(e.target as HTMLElement).closest(".file-block")) {
//         changeSelectedFiles((prevSelectedFiles) => []);
//       }
//     },
//     [changeSelectedFiles]
//   );

//   const onPasteFiles = useCallback(
//     (e: ClipboardEvent) => {
//       if (copiedFiles && copiedFiles.items.length) {
//         return moveFiles();
//       }
//       setFilesToUpload((prevFilesToUpload) => [...e.clipboardData!.files]);
//       setModal({
//         onAgree: uploadFiles,
//         onCancel: onCancelUpload,
//         content: `Скопировать выбранные файлы в ${path}`,
//       });
//     },
//     [copiedFiles, moveFiles, uploadFiles, path]
//   );

//   const onCutFiles = useCallback(() => {
//     if (selectedFiles.length) {
//       const copiedFiles = selectedFiles
//         .filter((selF) => selF.path !== "...")
//         .map((selFile) => {
//           const f = files!.find((file) => {
//             return file.path === selFile.path;
//           })!;

//           return {
//             path: f.fullPath,
//             isDir: f.isDir,
//           };
//         });

//       setCopiedFiles((prevCopiedFiles) => {
//         return { items: copiedFiles as SelectedFile[], type: "cut" };
//       });
//     }
//   }, [files, selectedFiles]);

//   const onCopyFiles = useCallback(() => {
//     if (selectedFiles.length) {
//       const copiedFiles = selectedFiles
//         .filter((sf) => sf.path !== "...")
//         .map((selFile) => {
//           const f = files!.find((file) => {
//             return file.path === selFile.path;
//           })!;

//           return {
//             path: f.fullPath,
//             isDir: f.isDir,
//           };
//         });

//       setCopiedFiles({ items: copiedFiles as SelectedFile[], type: "copy" });
//     }
//   }, [files, selectedFiles]);

//   useEffect(() => {
//     const preventDefaults: EventListener = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//     };

//     document.addEventListener("click", onMouseClicked);

//     ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
//       document.addEventListener(eventName, preventDefaults, false);
//     });

//     document.addEventListener("drop", onUploadFiles);
//     document.addEventListener("paste", onPasteFiles);
//     document.addEventListener("cut", onCutFiles);
//     document.addEventListener("copy", onCopyFiles);

//     return () => {
//       document.removeEventListener("click", onMouseClicked);
//       ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
//         document.removeEventListener(eventName, preventDefaults, false);
//       });
//       document.removeEventListener("drop", onUploadFiles);
//       document.removeEventListener("paste", onPasteFiles);
//       document.removeEventListener("cut", onCutFiles);
//       document.removeEventListener("copy", onCopyFiles);
//     };
//   }, [onUploadFiles, onCutFiles, onPasteFiles, onCopyFiles, onMouseClicked]);

//   const onSelectedFile = (title: string, mult: boolean, isDir: boolean) => {
//     if (mult) {
//       changeSelectedFiles((prevSelectedFiles) => {
//         const isSel =
//           prevSelectedFiles.findIndex((file) => file.path === title) !== -1;
//         if (isSel) return prevSelectedFiles.filter((s) => s.path !== title);
//         return [...prevSelectedFiles, { path: title, isDir: isDir }];
//       });
//     } else {
//       changeSelectedFiles((prevSelectedFiles) => {
//         return [{ path: title, isDir: isDir }];
//       });
//     }
//   };

//   const changeSortType = (type: keyof FileType) => {
//     setSortType((prevType) => {
//       return {
//         name: type,
//         reverse: prevType.name === type ? !prevType.reverse : false,
//       };
//     });
//   };

//   const getSortedFiles = () => {
//     const newFiles: (FileType & { selected: boolean })[] = files!
//       .sort((a, b) => {
//         return a[sortType.name] > b[sortType.name]
//           ? 1
//           : b[sortType.name] > a[sortType.name]
//           ? -1
//           : 0;
//       })
//       .map((f) => {
//         const isSel =
//           selectedFiles.findIndex(
//             (file) =>
//               file.path === f.path.replaceAll("/", "").replaceAll("\\", "")
//           ) !== -1;
//         return {
//           ...f,
//           selected: isSel,
//         };
//       });

//     if (sortType.reverse) {
//       return newFiles.reverse();
//     }
//     return newFiles;
//   };

//   const onFileBlockDrop = (title: string, files: File[]) => {
//     setTargetToUpload(title);
//     setFilesToUpload((prevFilesToUpload) => files);
//     setModal({
//       onAgree: uploadFiles,
//       onCancel: onCancelUpload,
//       content: `Скопировать выбранные файлы в ${path + "/" + targetToUpload}`,
//     });
//   };

//   const onRenameFile = (p: string) => {
//     setRenamedFile({ oldPath: p, newTitle: null });
//   };

//   useEffect(() => {
//     if (renamedFile && renamedFile.newTitle !== null) {
//       const oldName = renamedFile.oldPath.slice(
//         renamedFile.oldPath.lastIndexOf("\\") + 1
//       );
//       if (renamedFile.newTitle && renamedFile.newTitle !== oldName) {
//         setLoading(true);
//         fetch("/rename-file", {
//           method: "POST",
//           body: JSON.stringify({
//             oldPath: renamedFile.oldPath,
//             newTitle: renamedFile.newTitle,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             if (data.err) {
//               return console.log(data.err);
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           })
//           .finally(() => {
//             setRenamedFile(null);
//             setLoading(false);
//             update();
//           });
//       } else {
//         setRenamedFile(null);
//       }
//     }
//   }, [path, renamedFile, setLoading, update]);

//   const onRenamed = (newName: string) => {
//     setRenamedFile((prevRenamedFile) => {
//       return {
//         ...prevRenamedFile!,
//         newTitle: newName,
//       };
//     });
//   };

//   const onDeleteFile = () => {
//     onCloseContextMenu();
//     setLoading(true);
//     Promise.all(
//       selectedFiles.map((file) => {
//         return fetch("/delete-file", {
//           method: "POST",
//           body: JSON.stringify({ path: file.path, isDir: file.isDir }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//       })
//     )
//       .then((data) => {
//         setLoading(false);
//         update();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onContextMenu: MouseEventHandler = (e) => {
//     e.preventDefault();
//     setShowContextMenu(true);
//     setContextMenu({
//       isDir: false,
//       pos: [
//         e.clientX + document.documentElement.scrollLeft,
//         e.clientY + document.documentElement.scrollTop,
//       ],
//     });
//   };

//   const onContextMenuPaste = () => {
//     const event = new ClipboardEvent("paste");
//     document.dispatchEvent(event);
//   };

//   const onCreate = () => {};

//   let fileList = null;

//   if (files && files.length) {
//     fileList = getSortedFiles().map((file, i) => {
//       const isSelected = selectedFiles.find((f) => {
//         return f.path === file.path;
//       });

//       const isRenamed = renamedFile?.oldPath === file.path;

//       return (
//         <FileBlock
//           renamed={onRenamed}
//           isRenamed={isRenamed}
//           loading={loading}
//           selectedFile={onSelectedFile}
//           key={i}
//           {...file}
//           changeLocalDrag={changeLocalDrag}
//           selected={!!isSelected}
//           changePath={changePath}
//           onContextMenu={onContextMenuFile}
//           onDrop={onFileBlockDrop}
//         />
//       );
//     });
//   }

//   const rootDirIsSel =
//     selectedFiles.findIndex((file) => file.path === "...") !== -1;

//   return (
//     <StyledFileViewer onContextMenu={onContextMenu}>
//       <Header clicked={changeSortType} sortType={sortType} />
//       <BackFileBlock
//         selected={rootDirIsSel}
//         selectedFile={onSelectedFile}
//         loading={loading}
//         path={prevPath!}
//         onChangePath={changePath}
//       />
//       {fileList}
//       {showContextMenu && (
//         <ContextMenu
//           onDeleteFile={onDeleteFile}
//           onCopyFiles={onCopyFiles}
//           onCutFiles={onCutFiles}
//           files={selectedFiles}
//           setLoading={setLoading}
//           closeContextMenu={onCloseContextMenu}
//           onRenameFile={onRenameFile}
//           isHaveCopiedFiles={!!copiedFiles}
//           onCreate={onCreate}
//           {...contextMenu!}
//           onUpdate={update}
//           onPaste={onContextMenuPaste}
//         />
//       )}
//       {modal && (
//         <Modal onAgree={modal.onAgree} onCancel={modal.onCancel}>
//           {modal.content}
//         </Modal>
//       )}
//     </StyledFileViewer>
//   );
// };

// export default FileViewer;
