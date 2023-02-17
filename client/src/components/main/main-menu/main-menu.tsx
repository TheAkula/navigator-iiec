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
    <CenterBlock>
      {mode === MainMode.FILE_VIEWER ? <FileViewer /> : <Outlet />}
    </CenterBlock>
  )
}

