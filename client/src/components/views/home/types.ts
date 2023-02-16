import { ILinkItem, MenuItemType } from '../../../types'

export const mainData: ILinkItem[] = [
  {
    path: '//192.168.0.102/ЦСП$/Политика 2016-2017.pdf',
    title: 'Политика и цели колледжа в области качества',
    role: MenuItemType.ExternalRef,
  },
	// TODO: check path
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
    path: '',
    title: 'Организационные и нормативно-правовые документы',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['НД$'],
        role: MenuItemType.FileManager,
        title: 'Нормативные документы - Законодательство',
      },
      {
        path: ['ЛС$'],
        role: MenuItemType.FileManager,
        title: 'Правоустанавливающие документы колледжа',
      },
			{
        path: '/struct.jpg',
        role: MenuItemType.ExternalRef,
        title: 'Организационная структура колледжа',
      },
      {
        path: ['смк$', 'Реестры'],
        role: MenuItemType.FileManager,
        title: 'Реестры',
      },
      {
        path: ['ПА$'],
        role: MenuItemType.FileManager,
        title: 'Локальные акты',
      },
      {
        path: ['смк$', 'Положения о подразделениях'],
        role: MenuItemType.FileManager,
        title: 'Положения о подразделениях',
      },
      {
        path: ['Госзадание$'],
        role: MenuItemType.FileManager,
        title: 'Государственное задание',
      },
      {
        path: ['ПР$'],
        role: MenuItemType.FileManager,
        title: 'Программа развития колледжа',
      },
      {
        path: ['ПГОД$'],
        role: MenuItemType.FileManager,
        title: 'Годовой план работы колледжа',
      },
      {
        path: ['ПМЕС$'],
        role: MenuItemType.FileManager,
        title: 'Месячные планы работы колледжа',
      },
      {
        path: ['ОГОД$'],
        role: MenuItemType.FileManager,
        title: 'Отчет об итогах деятельности колледжа за год',
      },
      {
        path: ['отчет1$'],
        role: MenuItemType.FileManager,
        title: 'Отчеты внешние',
      },
      {
        path: ['ПК1$'],
        role: MenuItemType.FileManager,
        title: 'Приказы',
      },
      {
        path: ['ДП1$'],
        role: MenuItemType.FileManager,
        title: 'Документы по делопроизводству',
      },
      {
        path: ['Формы$'],
        role: MenuItemType.FileManager,
        title: 'Формы',
      },
      {
        path: ['lic ak$'],
        role: MenuItemType.FileManager,
        title: 'Материалы по лицензированию и аккредитации',
      },
      {
        path: ['модуль$'],
        role: MenuItemType.FileManager,
        title: 'Модуль сбора данных - аккредитация',
      },
      {
        path: ['госуслуги$'],
        role: MenuItemType.FileManager,
        title: 'Гос.услуги колледжа в электронном виде',
      },
      {
        path: ['пд$'],
        role: MenuItemType.FileManager,
        title: 'Персональные данные',
      },
    ],
  },
  {
    path: '',
    title: 'Учебная работа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['ПК2$'],
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту бюджетных групп ППССЗ очной формы обучения',
      },
      {
        path: ['ПК3$'],
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту внебюджетных групп ППССЗ очной формы обучения',
      },
      {
        path: ['ПК5$'],
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту внебюджетных групп ППССЗ заочной формы обучения',
      },
      {
        path: ['ПК6$'],
        role: MenuItemType.FileManager,
        title:
          'Приказы по контингенту бюджетных групп ППКРС очной формы обучения',
      },
      {
        path: ['ГР$'],
        role: MenuItemType.FileManager,
        title: 'Графики учебного процесса',
      },
      {
        path: ['КМО$', 'documents', 'ucheb'],
        role: MenuItemType.FileManager,
        title: 'Рабочие учебные планы по специальностям',
      },
      {
        path: ['НП$'],
        role: MenuItemType.FileManager,
        title: 'Нагрузка преподавателей очной и заочной форм обучения',
      },
      {
        path: ['НГ$'],
        role: MenuItemType.FileManager,
        title: 'Нагрузка групп очной и заочной форм обучения',
      },
      {
        path: ['АГО$'],
        role: MenuItemType.FileManager,
        title: 'Промежуточная аттестация групп очной формы обучения',
      },
      {
        path: ['ВРП$'],
        role: MenuItemType.FileManager,
        title: 'Ведомости ежемесячного учета часов работы преподавателей',
      },
      {
        path: ['СГ$'],
        role: MenuItemType.FileManager,
        title: 'Контингент студентов',
      },
      {
        path: ['ФГОС третьего поколения$'],
        role: MenuItemType.FileManager,
        title: 'ФГОС третьего поколения',
      },
      {
        path: ['prof_standart$'],
        role: MenuItemType.FileManager,
        title: 'Профессиональные стандарты',
      },
      {
        path: ['овз$'],
        role: MenuItemType.FileManager,
        title:
          'Организация образовательной деятельности для лиц с ограниченными возможностями здоровья',
      },
    ],
  },
  {
    path: '',
    title: 'Методическая работа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['ТОП50_ФГОС$'],
        role: MenuItemType.FileManager,
        title: 'Реализация ФГОС по ТОП 50',
      },
      {
        path: ['МК$'],
        role: MenuItemType.FileManager,
        title: 'Методическая копилка',
      },
      {
        path: ['ПК$'],
        role: MenuItemType.FileManager,
        title: 'Повышение квалификации',
      },
      {
        path: ['ЦК$'],
        role: MenuItemType.FileManager,
        title: 'Цикловые комиссии',
      },
      {
        path: ['ПиМС$'],
        role: MenuItemType.FileManager,
        title: 'Педагогические и методические советы',
      },
      {
        path: ['МР$'],
        role: MenuItemType.FileManager,
        title: 'Методические разработки',
      },
      {
        path: ['СЧ$'],
        role: MenuItemType.FileManager,
        title: 'Студенческие чтения',
      },
      {
        path: ['Методсеминары$'],
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
    path: '',
    title: 'Воспитательная работа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['Концепция_воспит$'],
        role: MenuItemType.FileManager,
        title: 'Концепция воспитания в колледже',
      },
      {
        path: ['Психол_пед_сопр$'],
        role: MenuItemType.FileManager,
        title: 'Психолого-педагогическое сопровождение',
      },
      {
        path: ['Репортаж_праздник$'],
        role: MenuItemType.FileManager,
        title: 'Репортажи с тематических праздников колледжа',
      },
      {
        path: ['Студсовет$'],
        role: MenuItemType.FileManager,
        title: 'Студенческий совет колледжа"',
      },
      {
        path: ['Музей$'],
        role: MenuItemType.FileManager,
        title: 'Музей истории колледжа',
      },
      {
        path: ['Спорт$'],
        role: MenuItemType.FileManager,
        title: 'Спорт в колледже',
      },
      {
        path: ['ДТК$'],
        role: MenuItemType.FileManager,
        title: 'Деятельность творческих коллективов в колледже',
      },
      {
        path: ['Расп_секций$'],
        role: MenuItemType.FileManager,
        title: 'Расписание занятий творческих объединений и спортивных секций',
      },
    ],
  },
  {
    path: '',
    title: 'Библиотека',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '//192.168.0.102/library$/index.htm',
        role: MenuItemType.ExternalRef,
        title: 'Электронная библиотека',
      },
      {
        path: ['news$'],
        role: MenuItemType.FileManager,
        title: 'Анонсы новинок',
      },
    ],
  },
  {
    path: '',
    title: 'Безопасность, охрана труда',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: '//192.168.0.102/Б$/Редактор НАВИГАТОРА/index.html',
        role: MenuItemType.ExternalRef,
        title: 'Безопасность',
      },
      {
        path: ['ОТ$'],
        role: MenuItemType.FileManager,
        title: 'Охрана труда',
      },
    ],
  },
  {
    path: '',
    title: 'Отдел кадров',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['ДИ$'],
        role: MenuItemType.FileManager,
        title: 'Должностные инструкции работников колледжа',
      },
      {
        path: ['АР$'],
        role: MenuItemType.FileManager,
        title: 'Документы по аттестации работников колледжа',
      },
      {
        path: ['ДР$'],
        role: MenuItemType.FileManager,
        title: 'Дни рождения сотрудников',
      },
			// TODO: check path
      // {
      //   path: '/',
      //   role: MenuItemType.FileManager,
      //   title: 'Фото сотрудников',
      // },
    ],
  },
  {
    path: '',
    title: 'Профориентационная работа, реклама колледжа',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['Реклама$'],
        role: MenuItemType.FileManager,
        title: 'Рекламная информация',
      },
      {
        path: ['ПП$'],
        role: MenuItemType.FileManager,
        title: 'Правила приема в колледж',
      },
    ],
  },
  {
    path: '',
    title: 'Конференции, олимпиады, конкурсы, предметные декады',
    role: MenuItemType.FileManager,
    listSelect: [
      {
        path: ['c_f$'],
        role: MenuItemType.FileManager,
        title: 'Конференции, форумы, семинары',
      },
      {
        path: ['olimp$'],
        role: MenuItemType.FileManager,
        title: 'Олимпиады',
      },
      {
        path: ['dec$'],
        role: MenuItemType.FileManager,
        title: 'Предметные декады',
      },
      {
        path: ['Конкурсы$'],
        role: MenuItemType.FileManager,
        title: 'Конкурсы',
      },
      {
        path: ['Выставки$'],
        role: MenuItemType.FileManager,
        title: 'Выставки',
      },
    ],
  },
]
