import { leftSidebarData } from '../components/main/menu-types'
import { rightSidebarData } from '../components/main/additionally-types'
import { Block, BlockItem, BlocksWrapper } from '../components'
import { MainMenu } from '../components/main'
import { Layout } from '../layout'

export const MainScreen = () => {
  return (
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
  )
}
