import Event from '../../assets/images/event.svg'
import Konsultant from '../../assets/images/konsultant-plus.svg'
import Library from '../../assets/images/library.svg'
import MetObr from '../../assets/images/metod-obr.svg'
import Web from '../../assets/images/optimize-web.svg'
import Quality from '../../assets/images/quality.svg'
import Timetable from '../../assets/images/timetable.svg'
import { MenuItemType, SidebarTypes } from './types'
import Phone from '../../assets/images/phone.svg'

export const leftSidebarData: SidebarTypes[] = [
  {
    id: '0',
    title: 'Комплексное методическое обеспечение',
    path: '/method-support',
    imgUrl: MetObr,
    roleLinks: MenuItemType.ExternalRef,
  },
  {
    id: '1',
    title: 'Расписание',
    path: '/timetable',
    imgUrl: Timetable,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '2',
    title: 'Менеджмент качества',
    path: '/quality',
    imgUrl: Quality,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '3',
    title: 'Библиотека PROFSPO',
    path: 'https://profspo.ru/',
    imgUrl: Library,
    roleLinks: MenuItemType.ExternalRef,
  },
  {
    id: '4',
    title: 'Консультант Плюс',
    path: 'http://www.consultant.ru/',
    imgUrl: Konsultant,
    roleLinks: MenuItemType.ExternalRef,
  },
  {
    id: '5',
    title: 'Официальный сайт колледжа',
    path: 'https://ciur.ru/ipek',
    imgUrl: Web,
    roleLinks: MenuItemType.ExternalRef,
  },
  {
    id: '6',
    title: 'Телефонные абоненты ИПЭК',
    path: '/phones',
    imgUrl: Phone,
    roleLinks: MenuItemType.Link,
  },
  {
    id: '7',
    title: 'Наша гордость',
    path: '/our-pride',
    imgUrl: Event,
    roleLinks: MenuItemType.Link,
  },
]
