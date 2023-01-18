import { LayoutWrapper } from '../components/styled'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

interface Props {
  children: React.ReactNode
  isShowMenu?: boolean
}

export const Layout = ({ children, isShowMenu = true }: Props) => {
  return (
    <div>
      <Header isShowMenu={isShowMenu} />
      <LayoutWrapper>
        {children}
        <Footer />
      </LayoutWrapper>
    </div>
  )
}
