interface HeaderTypes {
  id: string
  title: string
  path: string
}

export const headerMenuData: HeaderTypes[] = [
  {
    id: '0',
    title: 'Главная',
    path: '/',
  },
  {
    id: '1',
    title: 'Заявки',
    path: '/requests',
  },
  {
    id: '3',
    title: 'Студенту',
    path: '/student',
  },
]
