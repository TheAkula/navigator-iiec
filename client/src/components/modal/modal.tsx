import React, { useRef } from 'react'
import {
  StyledModal,
  Background,
  WrapperButtons,
  ButtonAgree,
  ButtonCancel,
} from './styled'

interface ModalProps {
  onAgree: () => void
  onCancel: () => void
  children?: React.ReactNode
}

export const Modal = ({ children, onAgree, onCancel }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <Background>
      <StyledModal ref={modalRef}>
        {children}
        <WrapperButtons>
          <ButtonAgree onClick={onAgree}>Ок</ButtonAgree>
          <ButtonCancel onClick={onCancel}>Отмена</ButtonCancel>
        </WrapperButtons>
      </StyledModal>
    </Background>
  )
}
