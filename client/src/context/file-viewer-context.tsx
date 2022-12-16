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
  delete_files,
  download_file,
  move_files,
  open_directory,
  rename_file,
  upload_files,
} from '../api/files'

export interface FileType {
  size: number;
  isDir: boolean;
  ext: string;
  title: string;
  path: string[];
  mtime: number;
  fullPath: string;
}

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

export type FileViewerFilter = Record<Filter, [FilterState, number]>;

interface FileViewerContextValue {
  buffer: FileType[];
  nativeBuffer: File[];
  path: string[];
  mode: MainMode;
  files: FileType[];
  loading: boolean;
  error: Error | null;
  filters: FileViewerFilter;
  selectedFiles: FileType[];
  selectFiles: (files: FileType[]) => void;
  clearSelectedFiles: () => void;
  removeFromSelectedFiles: (file: FileType) => void;
  toggleFilter: (filter: Filter) => void;
  addToBuffer: (files: FileType[]) => void;
  removeFromBuffer: (files: FileType[]) => void;
  clearBuffer: () => void;
  goNext: (dir: string) => Promise<void>;
  goBack: () => Promise<void>;
  getPrevPath: () => string[];
  addToNativeBuffer: (files: File[]) => void;
  clearNativeBuffer: () => void;
  updateMode: (mode: MainMode) => void;
  uploadFiles: (dest: string[]) => Promise<void>;
  deleteFiles: () => Promise<void>;
  // moveFilesRequest: (dest: string[]) => Promise<void>;
  // moveFiles: () => void;
  renameFile: (newName: string) => Promise<void>;
  copyFiles: () => void;
  // copyFilesRequest: (dest: string[]) => Promise<void>;
  cutFiles: () => void;
  pasteFiles: (dest: string[]) => void;
  openDirectory: (path: string[]) => Promise<void>;
  downloadFile: (path: string[], title: string) => Promise<void>;
}

const FileViewerContext = createContext<FileViewerContextValue>({
  buffer: [],
  nativeBuffer: [],
  path: [],
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
  /* eslint-disable @typescript-eslint/no-empty-function */
  selectFiles: () => { },
  pasteFiles: () => { },
  removeFromSelectedFiles: () => { },
  clearSelectedFiles: () => { },
  toggleFilter: () => { },
  goBack: () => Promise.resolve(),
  goNext: () => Promise.resolve(),
  getPrevPath: () => [],
  removeFromBuffer: () => { },
  addToBuffer: () => { },
  clearBuffer: () => { },
  addToNativeBuffer: () => { },
  clearNativeBuffer: () => { },
  updateMode: () => { },
  uploadFiles: () => Promise.resolve(),
  deleteFiles: () => Promise.resolve(),
  renameFile: () => Promise.resolve(),
  copyFiles: () => { },
  cutFiles: () => { },
  openDirectory: () => Promise.resolve(),
  downloadFile: () => Promise.resolve(),
  /* eslint-enable @typescript-eslint/no-empty-function */
})

interface Props {
  children: ReactNode;
}

export enum BufferAction {
  CUT,
  COPY,
}

export const FileViewerContextProvider = ({ children }: Props) => {
  const [buffer, setBuffer] = useState<FileType[]>([])
  const [nativeBuffer, setNativeBuffer] = useState<File[]>([])
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([])
  const [path, setPath] = useState<string[]>([])
  const [mode, setMode] = useState<MainMode>(MainMode.ROUTES)
  const [files, setFiles] = useState<FileType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [bufferAction, setBufferAction] = useState<BufferAction>()
  const [filters, setFilters] = useState<FileViewerFilter>({
    [Filter.EXT]: [FilterState.ASC, 2],
    [Filter.TITLE]: [FilterState.ASC, 0],
    [Filter.TIME]: [FilterState.ASC, 1],
    [Filter.SIZE]: [FilterState.ASC, 3],
  })

  const selectFiles = (files: FileType[]) => {
    setSelectedFiles(prevFiles => [...prevFiles, ...files])
  }

  const clearSelectedFiles = () => {
    setSelectedFiles(() => [])
  }

  const removeFromSelectedFiles = (file: FileType) => {
    setSelectedFiles(prevFiles => prevFiles.filter(f => f === file))
  }

  const toggleFilter = (filter: Filter) => {
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
        [filter]: [incrementedFilters[filter][0] === FilterState.ASC ? FilterState.DESC : FilterState.ASC, incrementedFilters[filter][1]]
      }
    })
  }

  const request = useCallback(
    <T extends unknown[]>(cb: (...args: T) => Promise<void>) =>
      async (...args: T) => {
        setLoading(true)
        setError(null)

        try {
          await cb(...args)
        } catch (err) {
          setError(err as AxiosError)
        }
      },
    []
  )

  const openDirectory = request(async (path: string[]) => {
    const respone = await open_directory({ path })
    setFiles(respone.data)
    setPath(path)
  })

  const downloadFile = request(async (path: string[], title: string) => {
    const res = await download_file({ path })
    const blob = new Blob([res.data])

    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = title
    link.click()
  })

  const goNext = request(async (dir: string) => {
    const response = await open_directory({ path: path.concat(dir) })

    setFiles(() => response.data)
    setPath((prev) => [...prev, dir])
  })

  const goBack = request(async () => {
    if (path.length) {
      const respone = await open_directory({
        path: path.slice(0, path.length - 1),
      })
      setFiles(respone.data)
      setPath((prevPath) => prevPath.slice(0, prevPath.length - 1))
    }
  })

  const uploadFiles = request(async (dest: string[]) => {
    if (nativeBuffer.length) {
      await upload_files({ files: nativeBuffer, dest })
      clearNativeBuffer()
    }
  })

  const deleteFiles = request(async () => {
    if (selectedFiles.length) {
      await delete_files({ files: selectedFiles.map((f) => ({ path: f.path })) })
      clearBuffer()
    }
  })

  const moveFilesRequest = request(async (dest: string[]) => {
    if (buffer.length) {
      await move_files({
        dest,
        files: buffer.map((f) => ({
          path: f.path,
        })),
      })
      clearBuffer()
    }
  })

  const renameFile = request(async (newName: string) => {
    if (buffer.length === 1) {
      await rename_file({ newName, path: buffer[0].path })
      clearBuffer()
    }
  })

  const copyFilesRequest = request(async (dest: string[]) => {
    if (buffer.length) {
      await copy_files({
        dest,
        files: buffer.map((f) => ({
          from: f.path,
        })),
      })
      clearBuffer()
    }
  })

  const addToBuffer = useCallback((files: FileType[]) => {
    setBuffer((prevBuffer) => [...prevBuffer, ...files])
  }, [])

  const removeFromBuffer = useCallback((files: FileType[]) => {
    setBuffer((prevBuffer) =>
      prevBuffer.filter((file) => {
        const findedFile = files.find((f) => f.path === file.path)

        return !findedFile
      })
    )
  }, [])

  const clearBuffer = useCallback(() => setBuffer(() => []), [])

  const addToNativeBuffer = useCallback(
    (files: File[]) => setNativeBuffer(() => files),
    []
  )

  const clearNativeBuffer = useCallback(() => setBuffer(() => []), [])

  const getPrevPath = useCallback(() => path.slice(0, path.length - 1), [path])

  const updateMode = useCallback((mode: MainMode) => setMode(() => mode), [])

  const copyFiles = () => {
    setBufferAction(BufferAction.COPY)
    clearBuffer()
    addToBuffer(selectedFiles)
    clearSelectedFiles()
  }

  const cutFiles = () => {
    setBufferAction(BufferAction.CUT)
    clearBuffer()
    addToBuffer(selectedFiles)
    clearSelectedFiles()
  }

  const pasteFiles = async (dest: string[]) => {
    if (bufferAction === BufferAction.COPY) {
      await copyFilesRequest(dest)
    } else if (bufferAction === BufferAction.CUT) {
      await moveFilesRequest(dest)
    }

    clearBuffer()
  }

  return (
    <FileViewerContext.Provider
      value={{
        loading,
        error,
        buffer,
        nativeBuffer,
        path,
        mode,
        files,
        filters,
        selectedFiles,
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
      }}
    >
      {children}
    </FileViewerContext.Provider>
  )
}

export const useFileViewerContext = () => useContext(FileViewerContext)
