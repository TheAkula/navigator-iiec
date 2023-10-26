import { AxiosError } from 'axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import {
  copy_files,
  create_dir,
  create_file,
  delete_files,
  download_file,
  move_files,
  open_directory,
  rename_file,
  upload_files,
} from '../api/files'
import { FileType } from '../types'
import { getName } from '../utils'

export enum MainMode {
  FILE_VIEWER,
  ROUTES,
}

export enum Filter {
  TITLE,
  TIME,
  EXT,
  SIZE,
}

export enum FilterState {
  ASC,
  DESC,
}

export type FileViewerFilter = Record<Filter, [FilterState, number]>

interface FileViewerContextValue {
  buffer: FileType[]
  nativeBuffer: File[]
  path: string[]
  localPath: string[]
  mode: MainMode
  files: FileType[]
  loading: boolean
  error: string | null
  filters: FileViewerFilter
  selectedFiles: FileType[]
  renamedFile: string[]
  renamedValue: string
  uploadProgress: number
  showUploadProgress: boolean
  downloadProgress: number
  showDownloadProgress: boolean
  changeRenamedFile: () => void
  changeRenamedValue: (value: string) => void
  changeLocalPath: (localPath: string[]) => void
  selectFiles: (files: FileType[]) => void
  clearSelectedFiles: () => void
  removeFromSelectedFiles: (file: FileType) => void
  toggleFilter: (filter: Filter) => void
  addToBuffer: (files: FileType[]) => void
  removeFromBuffer: (files: FileType[]) => void
  clearBuffer: () => void
  goNext: (dir: string) => Promise<void>
  goBack: () => Promise<void>
  getPrevPath: () => string[]
  addToNativeBuffer: (files: File[]) => void
  clearNativeBuffer: () => void
  updateMode: (mode: MainMode) => void
  uploadFiles: () => Promise<void>
  deleteFiles: () => Promise<void>
  createDir: (name: string) => Promise<void>
  createFile: (name: string) => Promise<void>
  renameFile: () => Promise<void>
  copyFiles: () => void
  cutFiles: () => void
  pasteFiles: () => void
  openDirectory: (path: string[]) => Promise<void>
  downloadFile: (path: string[], title: string) => Promise<void>
  updateDirectory: () => Promise<void>
  reset: () => void
}

const FileViewerContext = createContext<FileViewerContextValue>({
  buffer: [],
  nativeBuffer: [],
  path: [],
  localPath: [],
  mode: MainMode.ROUTES,
  files: [],
  loading: false,
  error: null,
  selectedFiles: [],
  filters: {
    [Filter.EXT]: [FilterState.ASC, 0],
    [Filter.TITLE]: [FilterState.ASC, 1],
    [Filter.TIME]: [FilterState.ASC, 2],
    [Filter.SIZE]: [FilterState.ASC, 3],
  },
  renamedFile: [],
  renamedValue: '',
  uploadProgress: 0,
  showUploadProgress: false,
  downloadProgress: 0,
  showDownloadProgress: false,
  /* eslint-disable @typescript-eslint/no-empty-function */
  changeRenamedFile: () => {},
  changeRenamedValue: () => {},
  changeLocalPath: () => {},
  selectFiles: () => {},
  pasteFiles: () => {},
  removeFromSelectedFiles: () => {},
  clearSelectedFiles: () => {},
  toggleFilter: () => {},
  goBack: () => Promise.resolve(),
  goNext: () => Promise.resolve(),
  getPrevPath: () => [],
  removeFromBuffer: () => {},
  addToBuffer: () => {},
  clearBuffer: () => {},
  addToNativeBuffer: () => {},
  clearNativeBuffer: () => {},
  updateMode: () => {},
  uploadFiles: () => Promise.resolve(),
  deleteFiles: () => Promise.resolve(),
  renameFile: () => Promise.resolve(),
  copyFiles: () => {},
  cutFiles: () => {},
  openDirectory: () => Promise.resolve(),
  downloadFile: () => Promise.resolve(),
  createDir: () => Promise.resolve(),
  createFile: () => Promise.resolve(),
  updateDirectory: () => Promise.resolve(),
  reset: () => undefined,
  /* eslint-enable @typescript-eslint/no-empty-function */
})

interface Props {
  children: ReactNode
}

export enum BufferAction {
  CUT,
  COPY,
}

const defaultFilters: FileViewerFilter = {
  [Filter.TITLE]: [FilterState.ASC, 0],
  [Filter.TIME]: [FilterState.ASC, 1],
  [Filter.EXT]: [FilterState.ASC, 2],
  [Filter.SIZE]: [FilterState.ASC, 3],
}

export const FileViewerContextProvider = ({ children }: Props) => {
  const [buffer, setBuffer] = useState<FileType[]>([])
  const [nativeBuffer, setNativeBuffer] = useState<File[]>([])
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([])
  const [path, setPath] = useState<string[]>([])
  const [localPath, setLocalPath] = useState<string[]>([])
  const [mode, setMode] = useState<MainMode>(MainMode.ROUTES)
  const [files, setFiles] = useState<FileType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [bufferAction, setBufferAction] = useState<BufferAction>()
  const [renamedFile, setRenamedFile] = useState<string[]>([])
  const [renamedValue, setRenamedValue] = useState<string>('')
  const [filters, setFilters] = useState<FileViewerFilter>(defaultFilters)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const [showUploadProgress, setShowUploadProgress] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState<number>(0)
  const [showDownloadProgress, setShowDownloadProgress] = useState(false)

  const reset = useCallback(() => {
    setBuffer(() => [])
    setNativeBuffer(() => [])
    setSelectedFiles(() => [])
    setPath(() => [])
    setLocalPath(() => [])
    setMode(() => MainMode.ROUTES)
    setFiles(() => [])
    setLoading(() => false)
    setError(() => null)
    setBufferAction(() => undefined)
    setRenamedFile(() => [])
    setRenamedValue(() => '')
    setFilters(() => defaultFilters)
    setUploadProgress(0)
    setShowUploadProgress(false)
    setDownloadProgress(0)
    setShowDownloadProgress(false)
  }, [])

  const selectFiles = useCallback((files: FileType[]) => {
    setSelectedFiles((prevFiles) => [...prevFiles, ...files])
  }, [])

  const clearSelectedFiles = useCallback(() => {
    setSelectedFiles(() => [])
  }, [])

  const removeFromSelectedFiles = useCallback((file: FileType) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f === file))
  }, [])

  const toggleFilter = useCallback((filter: Filter) => {
    function incrementFilters(filters: FileViewerFilter, filter: Filter) {
      const newFilter: FileViewerFilter = { ...filters }
      const prevOrder = newFilter[filter][1]

      for (const filt in newFilter) {
        const elem = newFilter[+filt as Filter]

        if (+filt === filter) {
          elem[1] = 0
        } else if (elem[1] < prevOrder) {
          elem[1]++
        }
      }

      return newFilter
    }

    setFilters((prevFilters) => {
      const incrementedFilters = incrementFilters(prevFilters, filter)

      return {
        ...incrementedFilters,
        [filter]: [
          incrementedFilters[filter][0] === FilterState.ASC
            ? FilterState.DESC
            : FilterState.ASC,
          incrementedFilters[filter][1],
        ],
      }
    })
  }, [])

  const request = useCallback(
    <T extends unknown[]>(cb: (...args: T) => Promise<void>) =>
      async (...args: T) => {
        setLoading(true)
        setError(null)

        try {
          await cb(...args)
        } catch (err) {
          setError((err as AxiosError).response?.data.message)
        }
      },
    [],
  )

  const updateDirectory = useCallback(async () => {
    const response = await open_directory({ path })

    if (response.config.params.path.join() === path.join()) {
      setFiles(() => response.data)
    }
  }, [path])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const openDirectory = useCallback(
    request(async (path: string[]) => {
      const respone = await open_directory({ path })
      setFiles(respone.data)
      setMode(MainMode.FILE_VIEWER)
      setPath(path)
      setLocalPath([])
    }),
    [],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const downloadFile = useCallback(
    request(async (path: string[], title: string) => {
      setShowDownloadProgress(true)
      const res = await download_file({ path }, (progressEvent) => {
        setDownloadProgress(progressEvent.loaded / progressEvent.total)
      })
      setShowDownloadProgress(false)
      setDownloadProgress(0)
      const blob = new Blob([res.data])

      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.href = url
      link.download = title
      link.click()
    }),
    [],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goNext = useCallback(
    request(async (dir: string) => {
      const response = await open_directory({ path: path.concat(dir) })

      setFiles(() => response.data)
      setPath((prev) => [...prev, dir])
      setLocalPath((prev) => [...prev, dir])
    }),
    [path],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goBack = useCallback(
    request(async () => {
      if (path.length) {
        const respone = await open_directory({
          path: path.slice(0, path.length - 1),
        })
        setFiles(respone.data)
        setPath((prevPath) => prevPath.slice(0, prevPath.length - 1))
        setLocalPath((prevPath) => prevPath.slice(0, prevPath.length - 1))
      }
    }),
    [path],
  )

  const clearNativeBuffer = useCallback(() => setBuffer(() => []), [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uploadFiles = useCallback(
    request(async () => {
      setShowUploadProgress(true)

      if (nativeBuffer.length) {
        await upload_files(
          { files: nativeBuffer, dest: path },
          (progressEvent: any) => {
            setUploadProgress(progressEvent.loaded / progressEvent.total)
          },
        )
        setShowUploadProgress(false)
        setUploadProgress(0)
        clearNativeBuffer()
      }
    }),
    [nativeBuffer, path, clearNativeBuffer],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteFiles = useCallback(
    request(async () => {
      if (selectedFiles.length) {
        await delete_files({
          files: selectedFiles.map((f) => ({ path: f.path })),
        })
        clearSelectedFiles()
      }
    }),
    [selectedFiles, clearSelectedFiles],
  )

  const clearBuffer = useCallback(() => setBuffer(() => []), [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const moveFilesRequest = useCallback(
    request(async (dest: string[]) => {
      if (buffer.length) {
        await move_files({
          dest,
          files: buffer.map((f) => ({
            path: f.path,
          })),
        })
        clearBuffer()
      }
    }),
    [buffer, clearBuffer],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renameFile = useCallback(
    request(async () => {
      if (renamedFile.length) {
        const file = files.find((f) => f.path.join() === renamedFile.join())
        await rename_file({
          new_name: renamedValue + (file?.ext || ''),
          path: renamedFile,
        })
        clearSelectedFiles()
        setRenamedFile([])
      }
    }),
    [renamedFile, renamedValue, clearSelectedFiles, files],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const copyFilesRequest = useCallback(
    request(async (to: string[]) => {
      if (buffer.length) {
        await copy_files({
          to,
          files: buffer.map((f) => ({
            from: f.path,
          })),
        })
        clearBuffer()
      }
    }),
    [clearBuffer, buffer],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createDir = useCallback(
    request(async (name: string) => {
      await create_dir({ name, path })
    }),
    [path],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createFile = useCallback(
    request(async (name: string) => {
      await create_file({ name, path })
    }),
    [path],
  )

  const addToBuffer = useCallback((files: FileType[]) => {
    setBuffer((prevBuffer) => [...prevBuffer, ...files])
  }, [])

  const removeFromBuffer = useCallback((files: FileType[]) => {
    setBuffer((prevBuffer) =>
      prevBuffer.filter((file) => {
        const findedFile = files.find((f) => f.path === file.path)

        return !findedFile
      }),
    )
  }, [])

  const addToNativeBuffer = useCallback(
    (files: File[]) => setNativeBuffer(() => files),
    [],
  )

  const getPrevPath = useCallback(() => path.slice(0, path.length - 1), [path])

  const updateMode = useCallback((mode: MainMode) => setMode(() => mode), [])

  const copyFiles = useCallback(() => {
    setBufferAction(BufferAction.COPY)
    clearBuffer()
    addToBuffer(selectedFiles)
    clearSelectedFiles()
  }, [clearBuffer, clearSelectedFiles, addToBuffer, selectedFiles])

  const cutFiles = useCallback(() => {
    setBufferAction(BufferAction.CUT)
    clearBuffer()
    addToBuffer(selectedFiles)
    clearSelectedFiles()
  }, [clearBuffer, addToBuffer, selectedFiles, clearSelectedFiles])

  const pasteFiles = useCallback(async () => {
    if (bufferAction === BufferAction.COPY) {
      await copyFilesRequest(path)
    } else if (bufferAction === BufferAction.CUT) {
      await moveFilesRequest(path)
    }

    clearBuffer()
  }, [clearBuffer, path, bufferAction, copyFilesRequest, moveFilesRequest])

  const changeLocalPath = useCallback((localPath: string[]) => {
    setLocalPath(localPath)
  }, [])

  const changeRenamedFile = useCallback(() => {
    if (selectedFiles.length === 1) {
      setRenamedValue(getName(selectedFiles[0]))
      setRenamedFile(selectedFiles[0].path)
    }
  }, [selectedFiles])

  const changeRenamedValue = useCallback(
    (value: string) => {
      if (renamedFile.length) {
        setRenamedValue(value)
      }
    },
    [renamedFile],
  )

  const contextValue: FileViewerContextValue = {
    loading,
    error,
    buffer,
    nativeBuffer,
    path,
    mode,
    files,
    filters,
    selectedFiles,
    localPath,
    renamedFile,
    renamedValue,
    showUploadProgress,
    uploadProgress,
    downloadProgress,
    showDownloadProgress,
    changeRenamedFile,
    changeRenamedValue,
    changeLocalPath,
    updateDirectory,
    createDir,
    createFile,
    cutFiles,
    pasteFiles,
    selectFiles,
    removeFromSelectedFiles,
    clearSelectedFiles,
    downloadFile,
    toggleFilter,
    addToBuffer,
    clearBuffer,
    removeFromBuffer,
    goBack,
    goNext,
    getPrevPath,
    addToNativeBuffer,
    clearNativeBuffer,
    updateMode,
    uploadFiles,
    renameFile,
    deleteFiles,
    copyFiles,
    openDirectory,
    reset,
  }

  return (
    <FileViewerContext.Provider value={contextValue}>
      {children}
    </FileViewerContext.Provider>
  )
}

export const useFileViewerContext = () => useContext(FileViewerContext)
