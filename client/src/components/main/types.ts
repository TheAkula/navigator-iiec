import { MenuItemType } from '../../types/links'

export interface SelectedFile {
  path: string
  isDir: boolean
}

export interface SidebarTypes {
  id: string
  title: string
  path: string | string[]
  imgUrl: string
  roleLinks: MenuItemType
}
