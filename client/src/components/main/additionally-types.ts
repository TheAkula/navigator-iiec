import College from '../../assets/images/college.svg'
import Documents from '../../assets/images/documents.svg'
import Gateway from '../../assets/images/gateway-locked.svg'
import Label from '../../assets/images/label.svg'
import Photo from '../../assets/images/photo.svg'
import Server from '../../assets/images/server-maintenance-data-back-up.svg'
import Support from '../../assets/images/support.svg'
import Video from '../../assets/images/video.svg'
import Wikipedia from '../../assets/images/wikipedia.svg'
import Work from '../../assets/images/work.svg'
import { MenuItemType, SidebarTypes } from './types'

export const rightSidebarData: SidebarTypes[] = [
  {
    id: '0',
    title: 'Документы преподавателей',
    path: ['/'],
    imgUrl: Documents,
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '1',
    title: 'Ярлыки',
    path: '/labels',
    imgUrl: Label,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '2',
    title: 'Фото',
    path: '/photos',
    imgUrl: Photo,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '3',
    title: 'Видео',
    path: '/videos',
    imgUrl: Video,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '4',
    title: 'Википедия',
    path: '/https://ru.wikipedia.org/',
    imgUrl: Wikipedia,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '5',
    title: 'Шлюз',
    path: '/gateway',
    imgUrl: Gateway,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '6',
    title: 'Помощь',
    path: '/support',
    imgUrl: Support,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '7',
    title: 'Электронный колледж и портал СПО',
    path: '/college',
    imgUrl: College,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '8',
    title: 'Образовательные ресурсы',
    path: '/resources',
    imgUrl: Work,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '9',
    title: 'Гос. информационные системы',
    path: '/systems',
    imgUrl: Server,
    roleLinks: MenuItemType.Link,
  },
]
