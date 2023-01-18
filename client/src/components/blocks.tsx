import { ReactNode } from 'react'
import styled from 'styled-components'

export const BlocksWrapper = styled.div`
  gap: 30px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`

interface BlockProps {
  children: ReactNode
  title?: string
}

export const Block = ({ children, title }: BlockProps) => {
  return (
    <StyledBlock>
      {title && <BlockTitle>{title}</BlockTitle>}
      {children}
    </StyledBlock>
  )
}

export const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #009af1;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 15px;
  text-transform: uppercase;
`

export const StyledBlock = styled.div`
  border: 2px solid #c9c9c9;
  border-radius: 8px 8px 0px 0px;
  background-color: #c3c3f333;
  padding-bottom: 15px;
  height: fit-content;
  flex: 1;
`

export const CenterBlock = styled(StyledBlock)`
  height: 765px;
  overflow-y: auto;
<<<<<<< Updated upstream
  padding: 30px;
=======
  flex: 1.5;
>>>>>>> Stashed changes
`
