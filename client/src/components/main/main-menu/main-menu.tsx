import { StyledMainMenu } from "./styled";
import Logo from "../../../assets/images/logo 1.svg";
import { FileType, SelectedFile } from "..";
import { Dispatch, SetStateAction } from "react";
import { MainRoutes } from "../../../routes";
import { FileViewer } from "../../fileViewer/file-viewer";

export const MainMenu = () => {
  return (
    <StyledMainMenu
      className="main-menu"
      style={{
        backgroundImage: `url('${Logo}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'calc(100% - 100px)',
      }}
    >
      <FileViewer />
    </StyledMainMenu>
  );
};
