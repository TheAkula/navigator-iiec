import { StyledFileBlock } from '../fileBlock/styled'
import { useFileViewerContext } from '../../../context/file-viewer-context'

const BackFileBlock = () => {
  const { goBack } = useFileViewerContext()

  const onDoubleClicked = async () => {
    await goBack()
  }

  return (
    <StyledFileBlock onDoubleClick={onDoubleClicked}>
      <div className="main-inf">
        <div className="image-container">
          <img src="images/folder.png" alt="folder" />
        </div>
        <span>...</span>
      </div>
    </StyledFileBlock>
  )
}

export default BackFileBlock
