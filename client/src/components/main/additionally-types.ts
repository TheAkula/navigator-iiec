import Documents from '../../assets/images/documents.svg'
import Gateway from '../../assets/images/gateway-locked.svg'
import Photo from '../../assets/images/photo.svg'
import Video from '../../assets/images/video.svg'
import { ISidebarLink, MenuItemType } from '../../types'

export const rightSidebarData: ISidebarLink[] = [
  {
    title: 'Документы преподавателей',
    path: ['prepod$'],
    img: Documents,
    role: MenuItemType.FileManager,
  },
  {
    title: 'Фото',
    path: ['фото$'],
    img: Photo,
    role: MenuItemType.FileManager,
  },
  {
    title: 'Видео',
    path: ['Video'],
    img: Video,
    role: MenuItemType.FileManager,
  },
  {
    title: 'Шлюз',
    path: ['шлюз'],
    img: Gateway,
    role: MenuItemType.FileManager,
  },
]
