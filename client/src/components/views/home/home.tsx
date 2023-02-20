import { RenderItem } from '../render-item'
import { ViewsComponentsList } from '../styled'
import { ILinkItem } from '../../../types'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [data, setData] = useState<ILinkItem[]>([])

  useEffect(() => {
    fetch('data/main.json').then((res) => res.json()).then((res) => setData(res))
  }, [])

  return (
    <ViewsComponentsList>
      {data.map((el) => (
        <RenderItem key={el.title} link={el} />
      ))}
    </ViewsComponentsList>
  )
}
