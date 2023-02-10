import { RenderItem } from '../render-item'
import { ViewsComponentsList } from '../styled'
import { StudentsData } from './types'

export const Student = () => {
  return (
    <ViewsComponentsList>
      {StudentsData?.map((el) => (
        <RenderItem key={el.title} link={el} />
      ))}
    </ViewsComponentsList>
  )
}
