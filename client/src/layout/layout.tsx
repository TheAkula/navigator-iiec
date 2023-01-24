import { LayoutWrapper } from '../components/styled'
import { Footer } from '../components/footer'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <LayoutWrapper>
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}
