import { ContextMenuContextProvider } from './context/context-menu-context'
import { FileViewerContextProvider } from './context/file-viewer-context'
import { AdditionalyRouter } from './routes'

function App() {
  return (
    <FileViewerContextProvider>
      <ContextMenuContextProvider>
        <AdditionalyRouter />
      </ContextMenuContextProvider>
    </FileViewerContextProvider>
  )
}

export default App
