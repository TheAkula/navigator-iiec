import React from 'react'
import { Link } from 'react-router-dom'
import { StyledViewsComponent } from './styled'

interface Props {
    children: React.ReactNode
    path: string
}

export const RenderItem = ({ path, children }: Props) => {
  return (
    <StyledViewsComponent>
      <Link to={path} className="link">
        {children}
      </Link>
    </StyledViewsComponent>
  )
}
