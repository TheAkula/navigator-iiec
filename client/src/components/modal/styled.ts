import styled, { css } from 'styled-components'

const sharedStyles = css`
  width: 90px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  &:hover {
    opacity: 0.9;
  }
`

export const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px 50px 20px;
  z-index: 200;
  border-radius: 10px;
`

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100%;
  z-index: 100;
`

export const WrapperButtons = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const ButtonAgree = styled.button`
  ${sharedStyles};
  background-color: lightgreen;
  padding: 20px;
`

export const ButtonCancel = styled.button`
  ${sharedStyles};
`
