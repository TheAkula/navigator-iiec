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
        title: 'Реализация ФГОС по ТОП 50',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Методическая копилка',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Повышение квалификации',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Цикловые комиссии',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Педагогические и методические советы',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Методические разработки',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Студенческие чтения',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Методические семинары, конференции',
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
        title: 'Концепция воспитания в колледже',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Психолого-педагогическое сопровождение',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Репортажи с тематических праздников колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Студенческий совет колледжа"',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Музей истории колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Спорт в колледже',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Деятельность творческих коллективов в колледже',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Расписание занятий творческих объединений и спортивных секций',
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
        title: 'Электронная библиотека',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Анонсы новинок',
      },
    ],
  },
  {
    path: '/',
    title: 'Безопасность, охрана труда',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Безопасность',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Охрана труда',
      },
    ],
  },
  {
    path: '/',
    title: 'Отдел кадров',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Должностные инструкции работников колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Документы по аттестации работников колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Должностные инструкции работников колледжа',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Дни рождения сотрудников',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Фото сотрудников',
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
        title: 'Рекламная информация',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Правила приема в колледж',
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
        title: 'Конференции, форумы, семинары',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Олимпиады',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Предметные декады',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Конкурсы',
      },
      {
        path: '/',
        role: MenuItemType.FileManager,
        title: 'Выставки',
      },
    ],
  },
]
