import { ILinkItem, MenuItemType } from '../../../types'

export const StudentsData: ILinkItem[] = [
  {
    path: ['stud2'],
    title: 'Документы студентов',
    role: MenuItemType.FileManager,
  },
  {
    // TODO: UNKNOWN_PATH
    path: '/',
    title: 'Организация учебного процесса',
    role: MenuItemType.FileManager,
  },
  {
    path: 'https://ciur.ru/ipek/DocLib62/Forms/AllItems.aspx/',
    title: 'Образовательные ресурсы',
    role: MenuItemType.ExternalRef,
  },
  {
    path: ['labor'],
    title: 'Материалы для самостоятельной работы',
    role: MenuItemType.FileManager,
  },
  {
    // TODO: delete
    path: '/testing.mht',
    title: 'Тестирование',
    role: MenuItemType.ExternalRef,
  },
  {
    path: ['практические работы'],
    title: 'Практические работы студентов',
    role: MenuItemType.FileManager,
  },
  {
    // TODO: UNKNOWN_PATH
    path: '/',
    title: 'График учебного процесса',
    role: MenuItemType.FileManager,
  },
  {
    // TODO: UNKNOWN_PATH
    path: '/',
    title: 'РУП по специальностям',
    role: MenuItemType.FileManager,
  },
  {
    // TODO: UNKNOWN_PATH
    path: '/',
    title: 'Конкурсы профессионального мастерства',
    role: MenuItemType.FileManager,
  },
]
