import { Footer, Header } from '../components'
import { LayoutWrapper } from '../components/styled'
import { Main } from '../screens'

export const Layout = () => {
  return (
    <div>
      <Header />
      <LayoutWrapper>
        <Main />
        <Footer />
      </LayoutWrapper>
    </div>
  )
}
