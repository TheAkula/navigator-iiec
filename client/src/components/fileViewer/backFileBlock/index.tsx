import { StyledFileBlock } from '../fileBlock/styled'
import FolderIcon from '../../../assets/images/folder.png'
import { MouseEventHandler } from 'react'
import { useFileViewerContext } from '../../../context/file-viewer'

const BackFileBlock = () => {
  const { goBack } = useFileViewerContext()

  const onDoubleClicked = async () => {
    await goBack()
  }

  const onClicked: MouseEventHandler = (e) => {
    // selectedFile('...', e.ctrlKey, true)
  }

  return (
    <StyledFileBlock
      // className={selected ? 'selected file-block' : 'file-block'}
      onClick={onClicked}
      onDoubleClick={onDoubleClicked}
    >
      <div className="main-inf">
        <div className="image-container">
          <img src={FolderIcon} alt="folder" />
        </div>
        <span>...</span>
      </div>
    </StyledFileBlock>
  )
}

export default BackFileBlock
