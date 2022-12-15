import { ContextMenuContextProvider } from './context/context-menu-context'
import { FileViewerContextProvider } from './context/file-viewer-context'
import { Layout } from './layout'

function App() {
  return (
    <FileViewerContextProvider>
      <ContextMenuContextProvider>
        <Layout />
      </ContextMenuContextProvider>
    </FileViewerContextProvider>
  )
}

export default App
