import Event from '../../assets/images/event.svg'
import Konsultant from '../../assets/images/konsultant-plus.svg'
import Library from '../../assets/images/library.svg'
import MethodSupport from '../../assets/images/metod-obr.svg'
import Web from '../../assets/images/optimize-web.svg'
import Quality from '../../assets/images/quality.svg'
import Timetable from '../../assets/images/timetable.svg'
import Phone from '../../assets/images/phone.svg'
import { ISidebarLink, MenuItemType } from '../../types'

export const leftSidebarData: ISidebarLink[] = [
  {
    title: 'Комплексное методическое обеспечение',
    path: '/method-support',
    img: MethodSupport,
    role: MenuItemType.ExternalRef,
  },
  {
    title: 'Расписание',
    path: ['РЗ$'],
    img: Timetable,
    role: MenuItemType.FileManager,
  },
  {
    title: 'Менеджмент качества',
    path: '/manage-quality',
    img: Quality,
    role: MenuItemType.ExternalRef,
  },
  {
    title: 'Библиотека PROFSPO',
    path: 'https://profspo.ru/',
    img: Library,
    role: MenuItemType.ExternalRef,
  },
  {
    title: 'Консультант Плюс',
    path: 'http://www.consultant.ru/',
    img: Konsultant,
    role: MenuItemType.ExternalRef,
  },
  {
    title: 'Официальный сайт колледжа',
    path: 'https://ciur.ru/ipek',
    img: Web,
    role: MenuItemType.ExternalRef,
  },
  {
    // TODO: UNKNOWN_PATH
    title: 'Телефонные абоненты ИПЭК',
    path: '/',
    img: Phone,
    role: MenuItemType.ExternalRef,
  },
  {
    // TODO: UNKNOWN_PATH
    title: 'Наша гордость',
    path: [''],
    img: Event,
    role: MenuItemType.FileManager,
  },
]
