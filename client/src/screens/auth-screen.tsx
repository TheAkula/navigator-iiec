import { Header } from '../components'
import { Auth } from '../components/auth/auth'
import { Layout } from '../layout'
import { RightHeader } from '../types'

export const AuthScreen = () => {
    return (
        <div>
            <Layout isShowMenu={false} rightHeader={RightHeader.LOGIN}>
                <Header isShowMenu />
                <Auth />
            </Layout>
        </div>
    )
}
