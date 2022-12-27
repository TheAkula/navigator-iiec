import { ReactNode } from 'react'
import { StyledModal, Background } from './styled'

type SetShowModal = (show: boolean) => void

interface ModalProps {
  show: boolean
  setShowModal: SetShowModal
  children?: ReactNode | ((func: SetShowModal) => ReactNode)
}

export const Modal = ({ children, show, setShowModal }: ModalProps) => {
  return (
    <>
      {show && (
        <Background onClick={() => setShowModal(false)}>
          <StyledModal onClick={(e) => e.stopPropagation()}>
            {typeof children === 'function' ? children(setShowModal) : children}
          </StyledModal>
        </Background>
      )}
    </>
  )
}
