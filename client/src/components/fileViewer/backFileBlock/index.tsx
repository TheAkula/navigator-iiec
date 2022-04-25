import { StyledFileBlock } from "../fileBlock/styled";
import FolderIcon from "../../../assets/images/folder.png";
import { MouseEventHandler } from "react";

interface BackFileBlockProps {
  path: string;
  onChangePath: (p: string) => void;
  loading: boolean;
  selectedFile: (f: string, m: boolean, d: boolean) => void;
  selected: boolean;
}

const BackFileBlock = ({
  path,
  onChangePath,
  loading,
  selectedFile,
  selected,
}: BackFileBlockProps) => {
  const onDoubleClicked = () => {
    onChangePath(path);
  };

  const onClicked: MouseEventHandler = (e) => {
    selectedFile("...", e.ctrlKey, true);
  };

  return (
    <StyledFileBlock
      style={{
        cursor: loading ? "wait" : "pointer",
      }}
      className={selected ? "selected file-block" : "file-block"}
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
  );
};

export default BackFileBlock;
