import { leftSidebarData } from '../components/main/menu-types'
import { rightSidebarData } from '../components/main/additionally-types'
import { Authorization, Block, BlockItem, BlocksWrapper, Header } from '../components'
import { MainMenu } from '../components/main'
import { Layout } from '../layout'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const MainScreen = () => {
  const navigate = useNavigate()

  const hasJWTtoken = () => {
    let flag = false

    localStorage.getItem('token') ? flag = true : flag = false

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
                <BlockItem
                  key={el.id}
                  link={{
                    path: el.path,
                    roleLinks: el.roleLinks,
                    title: el.title,
                    img: el.imgUrl,
                  }}
                />
              ))}
            </ul>
          </Block>

          <MainMenu />

          <Block title="Дополнительно">
            <ul>
              {rightSidebarData?.map((el) => (
                <BlockItem
                  key={el.id}
                  link={{
                    path: el.path,
                    roleLinks: el.roleLinks,
                    title: el.title,
                    img: el.imgUrl,
                  }}
                />
              ))}
            </ul>
          </Block>
        </BlocksWrapper>
      </Layout>
    </div>
  )
}
