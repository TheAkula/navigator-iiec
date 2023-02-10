import { ILinkItem } from '../../../types'
import { LinkItem } from '../../link-item'
import { StyledViewsComponent } from './styled'

interface Props {
  link: ILinkItem
}

export const RenderItem = ({ link }: Props) => {
  const renderItem = (title: string) => {
    return <StyledViewsComponent>{title}</StyledViewsComponent>
  }

  return <LinkItem link={link} renderItem={renderItem} />
}
