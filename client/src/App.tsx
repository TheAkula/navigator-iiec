import { FileViewerErrorBoundary } from './components'
import { ContextMenuContextProvider } from './context/context-menu-context'
import { FileViewerContextProvider } from './context/file-viewer-context'
import { AdditionalyRouter } from './routes'

function App() {
  return (
    <FileViewerContextProvider>
      <ContextMenuContextProvider>
        <AdditionalyRouter />
      </ContextMenuContextProvider>
      <FileViewerErrorBoundary />
    </FileViewerContextProvider>
  )
}

export default App
