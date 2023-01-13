import styled from 'styled-components'
import { useFileViewerContext } from '../../context/file-viewer-context'
import { getIcon } from '../../utils/file-info/get-file-icon'
import { getSize } from '../../utils/file-info/get-file-size'

interface Props {
  setShow: (show: boolean) => void
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

  return (
    <>
      <label htmlFor="dir-name">Загрузить выбранные файлы?</label>
      <br />
      <FileList>
        {nativeBuffer.map((file) => {
          const dotIndex = file.name.lastIndexOf('.')
          let ext = ''

          if (dotIndex !== -1) {
            ext = file.name.slice(dotIndex + 1)
          }

          return (
            <StyledFile key={file.name}>
              <FileInfo>
                <ImageContainer>
                  <img src={getIcon(ext, false)} alt={file.name} />
                </ImageContainer>
                {file.name}
              </FileInfo>
              {getSize(file.size)}
            </StyledFile>
          )
        })}
      </FileList>
      <div>
        <button onClick={onAgree}>Ок</button>
        <button onClick={onCancel}>Отмена</button>
      </div>
    </>
  )
}

const StyledFile = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  max-height: 50%;
  overflow: auto;
`

const ImageContainer = styled.div`
  width: 24px;
  height: 24px;
`
