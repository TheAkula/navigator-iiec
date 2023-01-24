import { LayoutWrapper } from '../components/styled'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { RightHeader } from '../types'

interface Props {
  children: React.ReactNode
  isShowMenu?: boolean
  rightHeader: RightHeader
}

export const Layout = ({ children, isShowMenu = true, rightHeader }: Props) => {
  return (
    <>
      <LayoutWrapper>
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}
