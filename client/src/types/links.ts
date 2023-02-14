export enum MenuItemType {
  Link,
  FileManager,
  ExternalRef,
}

export interface ListItem {
  path: string[] | string
  role: MenuItemType
  title: string
}

export interface ILinkItem {
  path: string[] | string
  role: MenuItemType
  title: string
  listSelect?: ListItem[]
}

export interface ISidebarLink extends ILinkItem {
  img: string
}
