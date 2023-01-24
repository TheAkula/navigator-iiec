import { MouseEventHandler, useState } from 'react'
import styled from 'styled-components'
import { getIcon, getSize } from '../utils'
import { FileTree } from './modals/upload-files-modal'
import FolderIcon from '../assets/images/folder.png'

interface Props {
  file: FileTree | File
  name?: string
}

export const FileOrFolder = ({ file, name }: Props) => {
  const [showFiles, setShowFiles] = useState(false)

  const fileClickHandler: MouseEventHandler = (e) => {
    e.stopPropagation()
  }

  if (file instanceof File) {
    return (
      <StyledFile onClick={fileClickHandler}>
        <FileInfo>
          <ImageContainer>
            <img
              src={getIcon(
                file.name.slice(file.name.lastIndexOf('.') + 1),
                false,
              )}
              alt={file.name}
            />
          </ImageContainer>
          {file.name}
        </FileInfo>
        {getSize(file.size)}
      </StyledFile>
    )
  }

  const showHandler: MouseEventHandler = (e) => {
    e.stopPropagation()
    setShowFiles((prev) => !prev)
  }

  return (
    <Folder onClick={showHandler}>
      <FolderInfo>
        <ImageContainer>
          <img src={FolderIcon} alt={name} />
        </ImageContainer>
        <span>{name}</span>
      </FolderInfo>
      <FileList show={showFiles}>
        {Object.entries(file).map(([key, f]) => {
          return <FileOrFolder key={key} file={f} name={key} />
        })}
      </FileList>
    </Folder>
  )
}

const Folder = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const FolderInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`

const StyledFile = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

interface FileListProps {
  show?: boolean
}

const FileList = styled.div<FileListProps>`
  flex-direction: column;
  max-height: 50%;
  margin-left: 10px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`

const ImageContainer = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`
