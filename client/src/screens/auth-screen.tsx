import { Header } from '../components'
import { Auth } from '../components/auth/auth'
import { Layout } from '../layout'
import { Location } from '../components'

export const AuthScreen = () => {
    return (
        <div>
            <Header isShowMenu={false}>
                <Location />
            </Header>
            <Layout>
                <Auth />
            </Layout>
        </div>
    )
}
