import { Authorization, Header } from '../components'
import { ManageQuality } from '../components/manage-quality'
import { Layout } from '../layout'

export const ManageQualityScreen = () => {
  return (
    <div>
      <Header>
        <Authorization />
      </Header>

      <Layout>
        <ManageQuality />
      </Layout>
    </div>
  )
}

