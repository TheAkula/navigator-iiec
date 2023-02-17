import { RenderItem } from '../render-item'
import { ViewsComponentsList } from '../styled'
import mainData from '../../../data/main.json'
import { ILinkItem } from '../../../types'

export const Home = () => {
  return (
    <ViewsComponentsList>
      {(mainData as ILinkItem[])?.map((el) => (
        <RenderItem key={el.title} link={el} />
      ))}
    </ViewsComponentsList>
  )
}
