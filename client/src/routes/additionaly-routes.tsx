import React from 'react'
import { Route, Routes } from 'react-router'
import { MainScreen, ManageQualityScreen } from '../screens'
import { MethodSupportScreen } from '../screens/method-support-screen'

export const AdditionalyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path="/method-support" element={<MethodSupportScreen />} />
            <Route path='/manage-quality' element={<ManageQualityScreen />} />
        </Routes>
    )
}
