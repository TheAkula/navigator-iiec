import Documents from '../../assets/images/documents.svg'
import Gateway from '../../assets/images/gateway-locked.svg'
import Photo from '../../assets/images/photo.svg'
import Video from '../../assets/images/video.svg'
import { MenuItemType, SidebarTypes } from './types'

export const rightSidebarData: SidebarTypes[] = [
  {
    id: '0',
    title: 'Документы преподавателей',
    path: ['for-teachers'],
    imgUrl: Documents,
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '1',
    title: 'Фото',
    path: '/photos',
    imgUrl: Photo,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '2',
    title: 'Видео',
    path: '/videos',
    imgUrl: Video,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '3',
    title: 'Шлюз',
    path: '/gateway',
    imgUrl: Gateway,
    roleLinks: MenuItemType.Link,
  },
]
