import { useEffect } from 'react'
import { useFileViewerContext } from '../context/file-viewer-context'

export const FileViewerErrorBoundary = () => {
  const { error } = useFileViewerContext()

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return null
}
