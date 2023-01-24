import { ManageQuality } from '../components/manage-quality'
import { Layout } from '../layout'
import { RightHeader } from '../types'

export const ManageQualityScreen = () => {
  return (
    <Layout isShowMenu={false} rightHeader={RightHeader.ADDRESS}>
      <ManageQuality />
    </Layout>
  )
}

