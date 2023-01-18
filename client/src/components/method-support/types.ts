import { MenuItemType } from '../../types'

interface MethodSupportTypes {
  id: string
  title: string
  path: string
  roleLinks: MenuItemType
}

export const methodSupportData: MethodSupportTypes[] = [
  {
    id: '0',
    title: 'Стандарт',
    path: '/',
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '1',
    title: 'ОПОП',
    path: '/',
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '2',
    title: 'Учебные планы',
    path: '/',
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '3',
    title: 'Дисциплины и модули ОПОП',
    path: '/',
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '4',
    title: 'ГИА',
    path: '/',
    roleLinks: MenuItemType.FileManager,
  },
  {
    id: '5',
    title: 'Практика',
    path: '/',
    roleLinks: MenuItemType.FileManager,
  },
]

export const selectChoiceData: string[] = [
  '10.02.05 Обеспечение информационной безопасности автоматизированных систем',
  '09.02.07 Информационные системы и программирование (разработчик веб и мультимедийных приложений)',
  '09.02.07 Информационные системы и программирование (специалист по тестированию в области информационных технологий)',
  '09.02.06 Сетевое и системное администрирование',
  '13.02.11 Техническая эксплуатация и обслуживание электрического и электромеханического оборудования',
  '13.02.02 Теплоснабжение и теплотехническое оборудование',
  '40.02.02 Правоохранительная деятельность',
  '40.02.01 Право и организация социального обеспечения',
  '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
  '15.01.05 Сварщик (ручной и частично механизированной сварки (наплавки))',
]
