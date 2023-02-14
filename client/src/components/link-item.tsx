import { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MainMode, useFileViewerContext } from '../context/file-viewer-context'
import { ILinkItem, MenuItemType } from '../types'
import { css } from 'styled-components'
import styled from 'styled-components'

export interface LinkItemProps {
  link: ILinkItem
  renderItem: (title: string) => ReactNode
}

export const LinkItem = ({ link, renderItem }: LinkItemProps) => {
  const { openDirectory, updateMode } = useFileViewerContext()
  const stringPath = Array.isArray(link.path) ? link.path.join() : link.path

  const changeHandler: MouseEventHandler = async (e) => {
    e.preventDefault()

    if (Array.isArray(link.path)) {
      openDirectory(link.path)
    }
  }

  const clickHandler = () => {
    updateMode(MainMode.ROUTES)
  }

  const elem = renderItem(link.title)

  return (
    <>
      {link.role === MenuItemType.Link && (
        <StyledLink onClick={clickHandler} to={stringPath}>
          {elem}
        </StyledLink>
      )}
      {link.role === MenuItemType.ExternalRef && (
        <StyledA
          onClick={clickHandler}
          href={stringPath}
          target="_blank"
          rel="noreferrer"
        >
          {elem}
        </StyledA>
      )}
      {link.role === MenuItemType.FileManager && (
        <StyledSpan onClick={changeHandler}>{elem}</StyledSpan>
      )}
    </>
  )
}

const linkStyle = css`
  cursor: pointer;
`

const StyledLink = styled(Link)`
  ${linkStyle}
`

const StyledA = styled.a`
  ${linkStyle}
`

const StyledSpan = styled.span`
  ${linkStyle}
`
