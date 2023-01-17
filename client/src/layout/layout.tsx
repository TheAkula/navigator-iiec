import { LayoutWrapper } from '../components/styled'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <LayoutWrapper>
        {children}
        <Footer />
      </LayoutWrapper>
    </div>
  )
}

