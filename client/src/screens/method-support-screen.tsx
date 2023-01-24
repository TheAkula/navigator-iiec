import React from 'react'
import { MethodSupport } from '../components/method-support'
import { Layout } from '../layout'
import { RightHeader } from '../types'

export const MethodSupportScreen = () => {
    return (
        <Layout isShowMenu={false} rightHeader={RightHeader.ADDRESS}>
            <MethodSupport />
        </Layout>
    )
}
