import { MouseEventHandler, useEffect, useState } from 'react'
import { poll } from '../../api'
import {
  ContextMenuMode,
  useContextMenuContext,
} from '../../context/context-menu-context'
import {
  FileViewerFilter,
  Filter,
  FilterState,
  useFileViewerContext,
} from '../../context/file-viewer-context'
import { FileType } from '../../types'
import BackFileBlock from './backFileBlock'
import { ContextMenu } from './contextMenu/context-menu'
import FileBlock from './fileBlock/file-block'
import Header from './header'
import { StatusHeader } from './status-header'
import { FileViewerContent } from './styled'

const getSortKey = (filter: Filter): keyof FileType => {
  switch (filter) {
    case Filter.TITLE:
      return 'title'

    case Filter.EXT:
      return 'ext'

    case Filter.SIZE:
      return 'size'

    case Filter.TIME:
      return 'mtime'

    default:
      throw new Error('Bad sort filter')
  }
}

const getSortedValue = <T,>(filterState: FilterState, a: T, b: T) => {
  if (filterState === FilterState.ASC) {
    return a < b
  } else {
    return a > b
  }
}

const getSortedFiles = (files: FileType[], filters: FileViewerFilter) => {
  const newFiles = files.sort((a, b) => {
    const sortedFilters: Filter[] = Object.keys(filters)
      .sort((a, b) => filters[+a as Filter][1] - filters[+b as Filter][1])
      .map((f) => +f)

    for (const filter of sortedFilters) {
      const sortKey = getSortKey(filter)
      const sortedValue = getSortedValue(
        filters[filter][0],
        a[sortKey],
        b[sortKey],
      )

      if (sortedValue) {
        return -1
      } else {
        return 0
      }
    }

    return 1
  })

  return newFiles
}

export const FileViewer = () => {
  const {
    path,
    localPath,
    files,
    filters,
    selectedFiles,
    toggleFilter,
    clearSelectedFiles,
    selectFiles,
    updateDirectory,
  } = useFileViewerContext()
  const { setShowContextMenu, setCoords, setContextMenuMode } =
    useContextMenuContext()
  const [timer, setTimer] = useState<NodeJS.Timer>()

  useEffect(() => {
    clearInterval(timer)

    const t = poll(updateDirectory, 10, 1000, path)
    setTimer(t)

    return () => {
      clearInterval(t)
    }
  }, [path, updateDirectory])

  useEffect(() => {
    function closeContextMenu() {
      setShowContextMenu(false)
    }

    function clearSelected() {
      clearSelectedFiles()
    }

    document.addEventListener('click', closeContextMenu)
    document.addEventListener('click', clearSelected)

    return () => {
      document.removeEventListener('click', closeContextMenu)
      document.removeEventListener('click', clearSelected)
    }
  }, [])

  const onContextMenu: MouseEventHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()

    setShowContextMenu(true)
    setContextMenuMode(ContextMenuMode.WORKSPACE)
    setCoords([
      e.clientX + document.documentElement.scrollLeft,
      e.clientY + document.documentElement.scrollTop,
    ])
  }

  const onContextMenuFile = (path: string[], x: number, y: number) => {
    const findedFile = files.find((f) => f.path.join() === path.join())

    if (findedFile) {
      setShowContextMenu(true)
      setContextMenuMode(ContextMenuMode.FILE)
      setCoords([x, y])

      const selectedFile = selectedFiles.find(
        (f) => f.path.join() === path.join(),
      )

      if (!selectedFile) {
        clearSelectedFiles()
        selectFiles([findedFile])
      }
    }
  }

  let fileList = null

  fileList = getSortedFiles(files, filters).map((file) => {
    const selected = selectedFiles.find((f) => {
      return f.path.join() === file.path.join()
    })

    return (
      <FileBlock
        selected={!!selected}
        key={file.path.join()}
        file={file}
        onContextMenu={onContextMenuFile}
      />
    )
  })

  return (
    <>
      <StatusHeader />
      <Header filters={filters} clicked={toggleFilter} />
      <FileViewerContent onContextMenu={onContextMenu}>
        {!!localPath.length && <BackFileBlock />}
        {fileList}
      </FileViewerContent>
      <ContextMenu />
    </>
  )
}
