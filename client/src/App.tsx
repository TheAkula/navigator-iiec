import { FileViewerErrorBoundary } from './components'
import { ContextMenuContextProvider } from './context/context-menu-context'
import { FileViewerContextProvider } from './context/file-viewer-context'
import { UserProvider } from './context/user-context'
import { MainRoutes } from './routes'

function App() {
  return (
    <FileViewerContextProvider>
      <ContextMenuContextProvider>
        <UserProvider>
          <MainRoutes />
        </UserProvider>
      </ContextMenuContextProvider>
      <FileViewerErrorBoundary />
    </FileViewerContextProvider>
  )
}

export default App
