import { useEffect, useState } from 'react'
import {
  FileType,
  FileViewerFilter,
  Filter,
  FilterState,
  useFileViewerContext,
} from '../../context/file-viewer'
import BackFileBlock from './backFileBlock'
import { ContextMenu } from './contextMenu'
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
    addToBuffer,
    clearBuffer,
    buffer,
    toggleFilter,
  } = useFileViewerContext()
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuCoords, setContextMenuCoords] = useState<[number, number]>([
    0, 0,
  ])

  useEffect(() => {
    openDirectory(path)
  }, [])

  const onContextMenu = () => {
    // eslint-disable-next-line no-console
  }

  const onContextMenuFile = (path: string[], x: number, y: number) => {
    const findedFile = files.find((f) => f.path.join() === path.join())

    if (findedFile) {
      setShowContextMenu(true)
      setContextMenuCoords(() => [x, y])

      const selectedFile = buffer.find((f) => f.path.join() === path.join())

      if (!selectedFile) {
        clearBuffer()
        addToBuffer([findedFile])
      }
    }
  }

  let fileList = null

  if (files && files.length) {
    fileList = getSortedFiles(files, filters).map((file, i) => {
      const selected = buffer.find((f) => {
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
      {/* {showContextMenu && (
        <ContextMenu
          onDeleteFile={onDeleteFile}
          onCopyFiles={onCopyFiles}
          onCutFiles={onCutFiles}
          files={selectedFiles}
          setLoading={setLoading}
          closeContextMenu={onCloseContextMenu}
          onRenameFile={onRenameFile}
          isHaveCopiedFiles={!!copiedFiles}
          onCreate={onCreate}
          {...contextMenu!}
          onUpdate={update}
          onPaste={onContextMenuPaste}
        />
      )} */}
      {/* {modal && (
        <Modal onAgree={modal.onAgree} onCancel={modal.onCancel}>
          {modal.content}
        </Modal>
      )} */}
    </StyledFileViewer>
  )
}
