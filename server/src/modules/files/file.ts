export interface FileType {
  size: number;
  isDir: boolean;
  ext: string;
  title: string;
  path: string[];
  mtime: number;
  fullPath: string;
}
