import leftSidebarData from '../data/left-sidebar.json'
import rightSidebarData from '../data/right-sidebar.json'
import { Authorization, Block, BlocksWrapper, Header } from '../components'
import { MainMenu } from '../components/main'
import { Layout } from '../layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { MainLinkItem } from '../components/main-link-item'
import { ISidebarLink } from '../types'

export const MainScreen = () => {
  const navigate = useNavigate()

  const hasJWTtoken = () => {
    let flag = false

    localStorage.getItem('token') ? (flag = true) : (flag = false)

    return flag
  }

  useEffect(() => {
    !hasJWTtoken() ? navigate('/login') : navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {(leftSidebarData as ISidebarLink[]).map((el) => (
                <MainLinkItem key={el.title} link={el} img={el.img} />
              ))}
            </ul>
          </Block>

          <MainMenu />

          <Block title="Дополнительно">
            <ul>
              {(rightSidebarData as ISidebarLink[]).map((el) => (
                <MainLinkItem key={el.title} link={el} img={el.img} />
              ))}
            </ul>
          </Block>
        </BlocksWrapper>
      </Layout>
    </div>
  )
}
