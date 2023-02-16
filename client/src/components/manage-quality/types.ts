import { ILinkItem, MenuItemType } from '../../types'

export const items: ILinkItem[] = [
  {
    path: ['смк$', 'программа эксперимента'],
    title: 'Программа эксперимента',
    role: MenuItemType.FileManager,
  },
  {
    path: '//192.168.0.102/web_cmk$/РК.htm',
    title: 'Руководство по качеству',
    role: MenuItemType.ExternalRef,
  },
  {
    path: ['смк$', 'РИ'],
    title: 'Рабочие инструкции',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'Правила'],
    title: 'Правила',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'Реестры'],
    title: 'Реестры',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'Формы'],
    title: 'Формы',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'План качества'],
    title: 'План качества',
    role: MenuItemType.FileManager,
  },
  // TODO: check path
  {
    path: '/',
    title: 'Стандарты организации',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'Дни качества'],
    title: 'Дни качества',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'Связь с потребителями'],
    title: 'Связь с потребителями',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$', 'Документы внешнего происхождения'],
    title: 'Документы внешнего происхождения',
    role: MenuItemType.FileManager,
  },
  {
    path: ['смк$'],
    title: 'Документы лаборатории',
    role: MenuItemType.FileManager,
  },
]
