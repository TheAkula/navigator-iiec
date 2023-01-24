import { Authorization, Header } from '../components'
import { MethodSupport } from '../components/method-support'
import { Layout } from '../layout'

export const MethodSupportScreen = () => {
    return (
        <div>
            <Header>
                <Authorization />
            </Header>
            <Layout>
                <MethodSupport />
            </Layout>
        </div>

    )
}
