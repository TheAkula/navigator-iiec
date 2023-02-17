import { RenderItem } from '../render-item'
import { ViewsComponentsList } from '../styled'
import requestsData from '../../../data/requests.json'
import { ILinkItem } from '../../../types'

export const Requests = () => {
  return (
    <ViewsComponentsList>
      {(requestsData as ILinkItem[])?.map((el) => (
        <RenderItem key={el.title} link={el} />
      ))}
    </ViewsComponentsList>
  )
}
