import FileViewer from '../../fileViewer'
import { StyledMainMenu } from './styled'
import Logo from '../../../assets/images/logo 1.svg'
import { FileType, SelectedFile } from '..'
import { Dispatch, SetStateAction } from 'react'
import { MainRoutes } from '../../../routes'

interface MainMenuProps {
  path: string | null;
  onChangePath: (p: string) => void;
  isFileViewer: boolean;
  prevPath: string | null;
  setLoading: (l: boolean) => void;
  loading: boolean;
  files: FileType[] | null;
  selectedFiles: SelectedFile[];
  update: () => void;
  changeSelectedFiles: Dispatch<SetStateAction<SelectedFile[]>>;
}

export const MainMenu = ({
  path,
  onChangePath,
  isFileViewer,
  prevPath,
  setLoading,
  files,
  selectedFiles,
  update,
  loading,
  changeSelectedFiles,
}: MainMenuProps) => {
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
      {isFileViewer && path ? (
        <FileViewer
          files={files}
          selectedFiles={selectedFiles}
          update={update}
          changeSelectedFiles={changeSelectedFiles}
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
  )
}

