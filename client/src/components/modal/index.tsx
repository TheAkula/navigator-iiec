import { MouseEventHandler } from "react";
import { REWithChildren } from "../../../types";
import { StyledModal, Background } from "./styled";

type ModalProps = REWithChildren & {
  onAgree: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({ children, onAgree, onCancel }: ModalProps) => {
  return (
    <>
      <StyledModal>
        <p>{children}</p>
        <div>
          <button onClick={onAgree}>Ок</button>
          <button onClick={onCancel}>Отмена</button>
        </div>
      </StyledModal>
      <Background />
    </>
  );
};

export default Modal;
