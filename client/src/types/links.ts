export enum MenuItemType {
  Link,
  FileManager,
  ExternalRef,
}

export interface ILinkItem {
  path: string[] | string
  role: MenuItemType
  title: string
}

export interface ISidebarLink extends ILinkItem {
  img: string
}
