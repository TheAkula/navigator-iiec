import { RenderItem } from '../render-item'
import { ViewsComponentsList } from '../styled'
import studentsData from '../../../data/student.json'
import { ILinkItem } from '../../../types'

export const Student = () => {
  return (
    <ViewsComponentsList>
      {(studentsData as ILinkItem[]).map((el) => (
        <RenderItem key={el.title} link={el} />
      ))}
    </ViewsComponentsList>
  )
}
