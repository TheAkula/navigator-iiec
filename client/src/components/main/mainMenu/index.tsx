import FileViewer from "../../fileViewer";
import MainRoutes from "../../../routes/mainRoutes";
import { StyledMainMenu } from "./styled";
import Logo from "../../../assets/images/logo 1.svg";

interface MainMenuProps {
  path: string | null;
  onChangePath: (p: string) => void;
  isFileViewer: boolean;
  prevPath: string | null;
  setLoading: (l: boolean) => void;
  loading: boolean;
}

const MainMenu = ({
  path,
  onChangePath,
  isFileViewer,
  prevPath,
  setLoading,
  loading,
}: MainMenuProps) => {
  return (
    <StyledMainMenu
      className="main-menu"
      style={{
        backgroundImage: `url('${Logo}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "calc(100% - 100px)",
      }}
    >
      {isFileViewer && path ? (
        <FileViewer
          prevPath={prevPath}
          path={path!}
          changePath={onChangePath}
          setLoading={setLoading}
          loading={loading}
        />
      ) : (
        <MainRoutes />
      )}
    </StyledMainMenu>
  );
};

export default MainMenu;
