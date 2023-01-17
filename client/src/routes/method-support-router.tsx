import React from 'react'
import { Route, Routes } from 'react-router'
import { MethodSupportScreen } from '../screens/method-support-screen'

export const MethodSupportRouter = () => {
    return (
        <Routes>
            <Route path="/method-support" element={<MethodSupportScreen />} />
        </Routes>
    )
}
