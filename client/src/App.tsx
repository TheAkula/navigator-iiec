import { FileViewerContextProvider } from "./context/file-viewer";
import { Layout } from "./layout";

function App() {
  return (
    <FileViewerContextProvider>
      <Layout />
    </FileViewerContextProvider>
  );
}

export default App
