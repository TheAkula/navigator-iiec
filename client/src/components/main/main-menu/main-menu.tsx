import Logo from '../../../assets/images/logo 1.svg'
import { FileViewer } from '../../fileViewer/file-viewer'
import {
  MainMode,
  useFileViewerContext,
} from '../../../context/file-viewer-context'
import { CenterBlock } from '../../../components'
import { Outlet } from 'react-router'

export const MainMenu = () => {
  const { mode } = useFileViewerContext()

  return (
    <CenterBlock
      style={{
        backgroundImage: `url('${Logo}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'calc(100% - 100px)',
      }}
    >
      {mode === MainMode.FILE_VIEWER ? <FileViewer /> : <Outlet />}
    </CenterBlock>
  )
}
