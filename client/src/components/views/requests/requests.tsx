import { RenderItem } from '../render-item'
import { ViewsComponentsList } from '../styled'
import { requestsData } from './types'

export const Requests = () => {
  return (
    <ViewsComponentsList>
      {requestsData?.map((el) => (
        <RenderItem key={el.title} link={el} />
      ))}
    </ViewsComponentsList>
  )
}
