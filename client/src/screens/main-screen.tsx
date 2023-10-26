import { Authorization, Block, BlocksWrapper, Header } from '../components'
import { MainMenu } from '../components/main'
import { Layout } from '../layout'
import { useEffect, useState } from 'react'
import { MainLinkItem } from '../components/main-link-item'
import { ISidebarLink } from '../types'

export const MainScreen = () => {
  const [leftData, setLeftData] = useState<ISidebarLink[]>([])
  const [rightData, setRightData] = useState<ISidebarLink[]>([])

  useEffect(() => {
    fetch('data/left-sidebar.json')
      .then((res) => res.json())
      .then((res) => setLeftData(res))
    fetch('data/right-sidebar.json')
      .then((res) => res.json())
      .then((res) => setRightData(res))
  }, [])

  return (
    <div>
      <Header>
        <Authorization />
      </Header>

      <Layout>
        <BlocksWrapper>
          <Block title="Меню">
            <ul>
              {leftData.map((el) => (
                <MainLinkItem key={el.title} link={el} img={el.img} />
              ))}
            </ul>
          </Block>

          <MainMenu />

          <Block title="Дополнительно">
            <ul>
              {rightData.map((el) => (
                <MainLinkItem key={el.title} link={el} img={el.img} />
              ))}
            </ul>
          </Block>
        </BlocksWrapper>
      </Layout>
    </div>
  )
}
