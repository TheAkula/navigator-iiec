import { MouseEventHandler, useEffect, useState } from 'react'
import { poll } from '../../api'
import { ContextMenuMode, useContextMenuContext } from '../../context/context-menu-context'
import {
  FileType,
  FileViewerFilter,
  Filter,
  FilterState,
  useFileViewerContext,
} from '../../context/file-viewer-context'
import BackFileBlock from './backFileBlock'
import { ContextMenu } from './contextMenu/context-menu'
import FileBlock from './fileBlock/file-block'
import Header from './header'
import { StyledFileViewer } from './styled'

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
        b[sortKey]
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
    files,
    openDirectory,
    filters,
    clearBuffer,
    selectedFiles,
    toggleFilter,
    clearSelectedFiles,
    selectFiles,
  } = useFileViewerContext()
  const { show, setShowContextMenu, setCoords, setContextMenuMode } = useContextMenuContext()
  const [timer, setTimer] = useState<NodeJS.Timer>()

  useEffect(() => {
    clearInterval(timer)
    const t = poll(openDirectory, 10, 1000, path)
    setTimer(t)

    return () => {
      clearInterval(timer)
    }
  }, [path])

  useEffect(() => {
    openDirectory(path)
  }, [])

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
      e.clientY + document.documentElement.scrollTop
    ])
  }

  const onContextMenuFile = (path: string[], x: number, y: number) => {
    const findedFile = files.find((f) => f.path.join() === path.join())

    if (findedFile) {
      setShowContextMenu(true)
      setContextMenuMode(ContextMenuMode.FILE)
      setCoords([x, y])

      const selectedFile = selectedFiles.find((f) => f.path.join() === path.join())

      if (!selectedFile) {
        clearBuffer()
        selectFiles([findedFile])
      }
    }
  }

  let fileList = null

  if (files && files.length) {
    fileList = getSortedFiles(files, filters).map((file, i) => {
      const selected = selectedFiles.find((f) => {
        return f.path.join() === file.path.join()
      })

      return (
        <FileBlock
          selected={!!selected}
          key={file.fullPath}
          file={file}
          onContextMenu={onContextMenuFile}
        />
      )
    })
  }

  return (
    <StyledFileViewer onContextMenu={onContextMenu}>
      <Header filters={filters} clicked={toggleFilter} />
      <BackFileBlock />
      {fileList}
      {show && (
        <ContextMenu />
      )}
      {/* {modal && (
        <Modal onAgree={modal.onAgree} onCancel={modal.onCancel}>
          {modal.content}
        </Modal>
      )} */}
    </StyledFileViewer>
  )
}
