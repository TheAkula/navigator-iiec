export enum MenuItemType {
  Link,
  FileManager,
  ExternalRef,
}

export interface IBlockItem {
  id?: string
  path: string[] | string
  roleLinks: MenuItemType
  title: string
  img?: string
}
