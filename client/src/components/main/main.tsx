import React from "react";
import { StyledMain, StyledMenu } from "./styled";
import { useEffect, useState, useCallback } from "react";
import { MainMenu } from "./main-menu";
import axios from "axios";
import { useLocation } from "react-router";
import { FileType, SelectedFile } from "./types";
import { leftSidebarData } from "./menu-types";
import { MenuItem } from "./menu-item";
import { rightSidebarData } from "./additionally-types";
import { useFileViewerContext } from "../../context/file-viewer";

export const Main = () => {
  const { openDirectory } = useFileViewerContext();
  const onChangePath = (path: string[]) => {
    openDirectory(path);
  };
  // const [path, setPath] = useState<null | string>(null);
  // const [prevPath, setPrevPath] = useState<null | string>(null);
  // const [loading, setLoading] = useState(false);
  // const [files, setFiles] = useState<FileType[] | null>(null);
  // const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  // const location = useLocation();
  // const { pathname } = location;

  // const update = useCallback(() => {
  //   setLoading(true);
  //   axios
  //     .post("/api", { path: path })
  //     .then((data) => {
  //       setLoading(false);
  //       setFiles(JSON.parse(data.data));
  //       setSelectedFiles([]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [path, setLoading]);

  // useEffect(() => {
  //   // if (prevPath !== path && path) {
  //   setLoading(false);
  //   if (path) {
  //     update();
  //   }
  //   // }
  // }, [update, path]);

  // useEffect(() => {
  //   document.documentElement.style.cursor = loading ? "wait" : "auto";
  // }, [loading]);

  // const onChangePath = (p: string) => {
  //   const getPrevPath = (prevP: string) => {
  //     for (let i = prevP.length - 2; i >= 0; i--) {
  //       if (prevP[i] === "/" || prevP[i] === "\\") {
  //         return prevP.slice(0, i) || "/";
  //       }
  //     }
  //     return prevP;
  //   };

  //   setPath(p);
  //   const prevP = getPrevPath(p!);
  //   setPrevPath(prevP);
  // };

  return (
    <StyledMain>
      <StyledMenu>
        <h3>Меню</h3>
        <ul>
          {leftSidebarData?.map((el) => (
            <MenuItem
              key={el.id}
              roleLinks={el.roleLinks}
              path={el.path}
              changePath={onChangePath}
            >
              <img src={el.imgUrl} alt="icon" />
              <p>{el.title}</p>
            </MenuItem>
          ))}
        </ul>
      </StyledMenu>

      <MainMenu />

      <StyledMenu>
        <h3>Меню</h3>
        <ul>
          {rightSidebarData?.map((el) => (
            <MenuItem
              key={el.id}
              path={el.path}
              roleLinks={el.roleLinks}
              changePath={onChangePath}
              state={{ showFileViewer: true }}
            >
              <img src={el.imgUrl} alt="icon" />
              <p>{el.title}</p>
            </MenuItem>
          ))}
        </ul>
      </StyledMenu>
    </StyledMain>
  );
};
