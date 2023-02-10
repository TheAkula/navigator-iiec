import { ILinkItem, MenuItemType } from '../../../types'

// TODO: make list links
export const mainData: ILinkItem[] = [
  {
    path: '\\\\192.168.0.102\\ЦСП$\\Политика 2016-2017.pdf',
    title: 'Политика и цели колледжа в области качества',
    role: MenuItemType.ExternalRef,
  },
  {
    title: 'Кабинеты колледжа',
    path: '/',
    role: MenuItemType.FileManager,
  },
  {
    path: 'https://profedutop50.ru',
    title: 'Профессиональное образование ТОП-50',
    role: MenuItemType.ExternalRef,
  },
  {
    path: '/',
    title: 'Организационные и нормативно-правовые документы',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Учебная работа',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Методическая работа',
    role: MenuItemType.FileManager,
  },
  {
    path: ['учебные_лаборатории_и_мастерские$'],
    title: 'Учебные лаборатории и мастерские',
    role: MenuItemType.FileManager,
  },
  {
    path: ['трудоустройство$'],
    title: 'Трудоустройство',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Воспитательная работа',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Библиотека',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Безопасность, охрана труда',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Отдел кадров',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Профориентационная работа, реклама колледжа',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Конференции, олимпиады, конкурсы, предметные декады',
    role: MenuItemType.FileManager,
  },
]
