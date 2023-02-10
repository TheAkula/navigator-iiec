import { leftSidebarData } from '../components/main/menu-types'
import { rightSidebarData } from '../components/main/additionally-types'
import { Authorization, Block, BlocksWrapper, Header } from '../components'
import { MainMenu } from '../components/main'
import { Layout } from '../layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { MainLinkItem } from '../components/main-link-item'

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
              {leftSidebarData?.map((el) => (
                <MainLinkItem key={el.title} link={el} img={el.img} />
              ))}
            </ul>
          </Block>

          <MainMenu />

          <Block title="Дополнительно">
            <ul>
              {rightSidebarData?.map((el) => (
                <MainLinkItem key={el.title} link={el} img={el.img} />
              ))}
            </ul>
          </Block>
        </BlocksWrapper>
      </Layout>
    </div>
  )
}
