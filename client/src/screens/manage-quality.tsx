import { Block, BlocksWrapper, CenterBlock } from '../components'
import { IBlockItem, BlockItem } from '../components'
import { FileViewer } from '../components/fileViewer/file-viewer'
import { MenuItemType } from '../components/main'

export const ManageQuality = () => {
  return (
    <BlocksWrapper>
      <Block title="Меню">
        <ul>
          {items.map((item) => (
            <BlockItem key={item.title} link={item} />
          ))}
        </ul>
      </Block>
      <CenterBlock>
        <FileViewer />
      </CenterBlock>
    </BlocksWrapper>
  )
}

const items: IBlockItem[] = [
  {
    path: '/',
    title: 'Программа эксперимента',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Руководство по качеству',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Рабочие инструкции',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Правила',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Реестры',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Формы',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'План качества',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Стандарты организации',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Дни качества',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Связь с потребителями',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Документы внешнего происхождения',
    roleLinks: MenuItemType.FileManager,
  },
  {
    path: '/',
    title: 'Документы лаборатории',
    roleLinks: MenuItemType.FileManager,
  },
]
