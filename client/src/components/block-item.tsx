import { MouseEventHandler } from 'react'
import { MainMode, useFileViewerContext } from '../context/file-viewer-context'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { IBlockItem, MenuItemType } from '../types'


interface Props {
  link: IBlockItem
}

export const BlockItem = ({ link }: Props) => {
  const { openDirectory, updateMode } = useFileViewerContext()
  const stringPath = Array.isArray(link.path) ? link.path.join() : link.path

  const changeHandler: MouseEventHandler = async (e) => {
    e.preventDefault()

    if (Array.isArray(link.path)) {
      await openDirectory(link.path)
      updateMode(MainMode.FILE_VIEWER)
    }
  }

  const clickHandler = () => {
    updateMode(MainMode.ROUTES)
  }

  const itemContent = (
    <>
      {link.img && <img src={link.img} alt={link.title} />}
      <ItemTitle>{link.title}</ItemTitle>
    </>
  )

  return (
    <>
      {link.roleLinks === MenuItemType.Link && (
        <StyledMenuLink onClick={clickHandler} to={stringPath}>
          {itemContent}
        </StyledMenuLink>
      )}
      {link.roleLinks === MenuItemType.ExternalRef && (
        <StyledMenuA onClick={clickHandler} href={stringPath} target="_blank">
          {itemContent}
        </StyledMenuA>
      )}
      {link.roleLinks === MenuItemType.FileManager && (
        <StyledMenuA onClick={changeHandler}>{itemContent}</StyledMenuA>
      )}
    </>
  )
}

const sharedStyle = css`
  display: flex;
  gap: 10px;
  padding: 15px 0 15px 30px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #daf2ff;
  }
`

const ItemTitle = styled.p`
  font-size: 16px;
  line-height: 18.75px;
  color: #333333;
`

const StyledMenuA = styled.a`
  ${sharedStyle}
`

const StyledMenuLink = styled(Link)`
  ${sharedStyle}
`
