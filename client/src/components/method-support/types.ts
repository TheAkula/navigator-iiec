export enum MenuItemType {
  DEPENDENT,
  BASE,
  LIST,
}

export enum MenuItemPlace {
  RELATIVE,
  ABSOLUTE,
}

export enum SpecType {
	ECO,
	GUM,
	NPO,
	TECH,
}

export interface Spec {
	title: string
	type: SpecType
	value: string[]
}

export interface IMenuItem {
  value?: string | Record<SpecType, string | string[]> | string[]
  title: string
  type: MenuItemType
  place?: MenuItemPlace
  items?: IMenuItem[]
}

export const methodSupportData: IMenuItem[] = [
  {
    title: 'Стандарт',
    value: 'стандарт',
    type: MenuItemType.BASE,
    place: MenuItemPlace.RELATIVE,
  },
  {
    title: 'ОПОП',
    value: 'опоп',
    type: MenuItemType.BASE,
    place: MenuItemPlace.RELATIVE,
  },
  {
    title: 'Учебные планы',
    value: 'уч_планы',
    type: MenuItemType.BASE,
    place: MenuItemPlace.RELATIVE,
  },
  {
    title: 'Дисциплины и модули ОПОП',
    items: [
      {
        title: 'ОД',
				value: {
					[SpecType.TECH]: ['spec_stand3$', 'od', 'od_tech'],
					[SpecType.NPO]: ['spec_stand3$', 'od', 'od_npo'],
					[SpecType.GUM]: ['spec_stand3$', 'od', 'od_gum'],
					[SpecType.ECO]: ['spec_stand3$', 'od', 'od_eco'],
				},
        place: MenuItemPlace.ABSOLUTE,
        type: MenuItemType.DEPENDENT,
      },
			{
				title: 'ОГСЭ',
				value: 'огсэ',
				type: MenuItemType.BASE,
				place: MenuItemPlace.RELATIVE,
			},
			{
				title: 'ЕН',
				value: 'ен',
				type: MenuItemType.BASE,
				place: MenuItemPlace.RELATIVE,
			},
			{
				title: 'ОП',
				value: 'оп',
				type: MenuItemType.BASE,
				place: MenuItemPlace.RELATIVE,
			},
			{
				title: 'ПМ',
				value: 'пм',
				type: MenuItemType.BASE,
				place: MenuItemPlace.RELATIVE,
			}
    ],
    type: MenuItemType.LIST,
  },
  {
    title: 'ГИА',
    value: 'гиа',
    type: MenuItemType.BASE,
    place: MenuItemPlace.RELATIVE,
  },
  {
    title: 'Практика',
    value: 'практика',
    type: MenuItemType.BASE,
    place: MenuItemPlace.RELATIVE,
  },
]

export const selectChoiceData: Spec[] = [
  {
		title: '10.02.05 Обеспечение информационной безопасности автоматизированных систем',
		type: SpecType.TECH,
		value: ['spec_stand3$', '100205'],
	},
  {
		title: '09.02.07 Информационные системы и программирование (разработчик веб и мультимедийных приложений)',
		type: SpecType.TECH,
		value: ['spec_stand3$', '090207_2'],
	},
  {
		title: '09.02.07 Информационные системы и программирование (специалист по тестированию в области информационных технологий)',
		type: SpecType.TECH,
		value: ['spec_stand3$', '09.02.07_3'],
	},
  {
		title: '09.02.06 Сетевое и системное администрирование',
		type: SpecType.TECH,
		value: ['spec_stand3$', '090206'],
	},
  {
		title: '13.02.11 Техническая эксплуатация и обслуживание электрического и электромеханического оборудования',
		type: SpecType.TECH,
		value: ['spec_stand3$', '140448'],
	},
  {
		title: '13.02.02 Теплоснабжение и теплотехническое оборудование',
		type: SpecType.TECH,
		value: ['spec_stand3$', '140102'],
	},
  {
		title: '40.02.02 Правоохранительная деятельность',
		type: SpecType.GUM,
		value: ['spec_stand3$', '031001'],
	},
  {
		title: '40.02.01 Право и организация социального обеспечения',
		type: SpecType.GUM,
		value: ['spec_stand3$', '40.02.01'],
	},
  {
		title: '13.01.10 Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)',
		type: SpecType.NPO,
		value: ['spec_stand3$', '130110'],
	},
  {
		title: '15.01.05 Сварщик (ручной и частично механизированной сварки (наплавки))',
		type: SpecType.NPO,
		value: ['spec_stand3$', '150105'],
	},
]
