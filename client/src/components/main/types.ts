export interface FileType {
  ext: string;
  isDir: boolean;
  size: number;
  title: string;
  path: string;
  mtime: number;
  fullPath: string;
}

export enum MenuItemType {
  Link,
  FileManager,
  ExternalRef,
}

export interface SelectedFile {
  path: string;
  isDir: boolean;
}

export interface SidebarTypes {
  id: string;
  title: string;
  path: string | string[];
  imgUrl: string;
  roleLinks: MenuItemType;
}
