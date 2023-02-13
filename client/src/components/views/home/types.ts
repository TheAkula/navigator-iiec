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
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Нормативные документы - Законодательство',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Правоустанавливающие документы колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Реестры',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Локальные акты',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Положения о подразделениях',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Государственное задание',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Программа развития колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Годовой план работы колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Месячные планы работы колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Отчет об итогах деятельности колледжа за год',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Отчеты внешние',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Приказы',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Документы по делопроизводству',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Формы',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Материалы по лицензированию и аккредитации',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Модуль сбора данных - аккредитация',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Гос.услуги колледжа в электронном виде',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Персональные данные',
      },
    ],
  },
  {
    path: '/',
    title: 'Учебная работа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту бюджетных групп ППССЗ очной формы обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту внебюджетных групп ППССЗ очной формы обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту внебюджетных групп ППССЗ заочной формы обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту бюджетных групп ППКРС очной формы обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Графики учебного процесса',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Рабочие учебные планы по специальностям',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Нагрузка преподавателей очной и заочной форм обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Нагрузка групп очной и заочной форм обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Промежуточная аттестация групп очной формы обучения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Ведомости ежемесячного учета часов работы преподавателей',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Контингент студентов',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'ФГОС третьего поколения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Профессиональные стандарты',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title:
          'Организация образовательной деятельности для лиц с ограниченными возможностями здоровья',
      },
    ],
  },
  {
    path: '/',
    title: 'Методическая работа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: '',
      },
    ],
  },
  {
    path: ['учебные_лаборатории_и_мастерские$'],
    title: 'Учебные лаборатории и мастерские',
    role: MenuItemType.FileManager,
  },
  {
    path: ['Трудоустройство$'],
    title: 'Трудоустройство',
    role: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Воспитательная работа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: '',
      },
    ],
  },
  {
    path: '/',
    title: 'Библиотека',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: '',
      },
    ],
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
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: '',
      },
    ],
  },
  {
    path: '/',
    title: 'Профориентационная работа, реклама колледжа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: '',
      },
    ],
  },
  {
    path: '/',
    title: 'Конференции, олимпиады, конкурсы, предметные декады',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: '',
      },
    ],
  },
]
