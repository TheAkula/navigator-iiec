import { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MainMode, useFileViewerContext } from '../context/file-viewer-context'
import { ILinkItem, MenuItemType } from '../types'

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
        <Link onClick={clickHandler} to={stringPath}>
          {elem}
        </Link>
      )}
      {link.role === MenuItemType.ExternalRef && (
        <a
          onClick={clickHandler}
          href={stringPath}
          target="_blank"
          rel="noreferrer"
        >
          {elem}
        </a>
      )}
      {link.role === MenuItemType.FileManager && (
        <span onClick={changeHandler}>{elem}</span>
      )}
    </>
  )
}
