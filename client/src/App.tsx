import { FileViewerErrorBoundary } from './components'
import { ContextMenuContextProvider } from './context/context-menu-context'
import { FileViewerContextProvider } from './context/file-viewer-context'
import { UserProvider } from './context/user-context'
import { AdditionalyRouter } from './routes'

function App() {
  return (
    <FileViewerContextProvider>
      <ContextMenuContextProvider>
        <UserProvider>
          <AdditionalyRouter />
        </UserProvider>
      </ContextMenuContextProvider>
      <FileViewerErrorBoundary />
    </FileViewerContextProvider>
  )
}

export default App
