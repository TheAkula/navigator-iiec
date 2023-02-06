import styled from 'styled-components'
import { useFileViewerContext } from '../../context/file-viewer-context'
import { FileOrFolder } from '../file-or-folder'

interface Props {
  setShow: (show: boolean) => void
}

export type FileTree = { [K: string]: File | FileTree }

function sortFilesToFolders(files: File[]): FileTree {
  const result: FileTree = {}

  for (let i = 0; i < files.length; ++i) {
    const file = files[i]

    if (file.webkitRelativePath.length === 0) {
      result[file.name] = file
      continue
    }

    const path = file.webkitRelativePath.split(/\//g)

    let elem = result

    for (let j = 0; j < path.length - 1; ++j) {
      if (!path[j].length) continue

      if (!(path[j] in elem)) {
        ;(elem as FileTree)[path[j]] = {}
      }

      elem = (elem as FileTree)[path[j]] as FileTree
    }

    ;(elem as FileTree)[path[path.length - 1]] = file
  }

  return result
}

// TODO: add styles
export const UploadFilesModal = ({ setShow }: Props) => {
  const { uploadFiles, nativeBuffer } = useFileViewerContext()

  const onAgree = async () => {
    uploadFiles()
    setShow(false)
  }

  const onCancel = () => {
    setShow(false)
  }

	// TODO: add func to remove files to upload
  // const onHide = () => {}

  const files = sortFilesToFolders(nativeBuffer)

  return (
    <>
      <Title>Загрузить выбранные файлы?</Title>
      <ModalWrapper>
        <br />
        <FilesWrapper>
          {Object.entries(files).map(([key, value]) => (
            <FileOrFolder key={key} file={value} name={key} />
          ))}
        </FilesWrapper>
      </ModalWrapper>
      <ButtonWrapper>
        <button onClick={onAgree}>Ок</button>
        <button onClick={onCancel}>Отмена</button>
      </ButtonWrapper>
    </>
  )
}

const Title = styled.h3`
  font-weight: normal;
`

const ModalWrapper = styled.div`
  width: 600px;
  height: 500px;
  overflow: auto;
`

const FilesWrapper = styled.div``

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`
