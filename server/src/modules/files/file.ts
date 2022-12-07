export interface File {
  size: number;
  isDir: boolean;
  ext: string;
  title: string;
  path: string;
  mtime: number;
  fullPath: string;
}
