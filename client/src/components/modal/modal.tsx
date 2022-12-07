import React from 'react'
import { MouseEventHandler } from "react";
import { StyledModal, Background } from "./styled";

type ModalProps = {
  onAgree: MouseEventHandler<HTMLButtonElement>
  onCancel: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
};

export const Modal = ({ children, onAgree, onCancel }: ModalProps) => {
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

