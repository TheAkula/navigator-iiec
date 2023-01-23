import styled from 'styled-components'

export const Input = styled.input`
  margin: 10px 0 30px;
  width: 100%;
  height: 25px;
  border: 1px solid black;
  width: 300px;
  padding: 15px 5px;
  font-size: 14px;
`

export const WrapperBtns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const BtnCreate = styled.button`
  background-color: lightgreen;
  border: none;
  padding: 5px 10px;
  width: 47%;
  cursor: pointer;
`

export const BtnCancel = styled.button`
  width: 47%;
  padding: 5px 10px;
  background-color: #ff4d4d;
  border: none;
  cursor: pointer;
`
