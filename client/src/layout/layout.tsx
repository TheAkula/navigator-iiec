import { Footer, Main, Header } from '../components'
import { LayoutWrapper } from '../components/styled'

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

