import React, { MouseEventHandler } from 'react'
import {
  MainMode,
  useFileViewerContext,
} from '../../../context/file-viewer-context'
import { MenuItemType } from '../types'
import { StyledMenuA, StyledMenuLink } from './styled'

interface Props {
  path: string[] | string
  children?: React.ReactNode
  roleLinks: MenuItemType
}

export const MenuItem = ({ path, children, roleLinks }: Props) => {
  const { openDirectory, updateMode } = useFileViewerContext()
  const stringPath = Array.isArray(path) ? path.join() : path

  const changeHandler: MouseEventHandler = async (e) => {
    e.preventDefault()

    if (Array.isArray(path)) {
      await openDirectory(path)
      updateMode(MainMode.FILE_VIEWER)
    }
  }

  const clickHandler = () => {
    updateMode(MainMode.ROUTES)
  }

  return (
    <>
      {roleLinks === MenuItemType.Link && (
        <StyledMenuLink onClick={clickHandler} to={stringPath}>
          {children}
        </StyledMenuLink>
      )}
      {roleLinks === MenuItemType.ExternalRef && (
        <StyledMenuA onClick={clickHandler} href={stringPath} target="_blank">
          {children}
        </StyledMenuA>
      )}
      {roleLinks === MenuItemType.FileManager && (
        <StyledMenuA onClick={changeHandler}>{children}</StyledMenuA>
      )}
    </>
  )
}
