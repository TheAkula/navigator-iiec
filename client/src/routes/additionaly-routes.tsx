import React from 'react'
import { Route, Routes } from 'react-router'
import { Home, Requests, Student } from '../components/views'
import { MainScreen, ManageQualityScreen } from '../screens'
import { MethodSupportScreen } from '../screens/method-support-screen'

export const AdditionalyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainScreen />}>
                <Route path="/" element={<Home />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/student" element={<Student />} />
            </Route>
            <Route path="/method-support" element={<MethodSupportScreen />} />
            <Route path='/manage-quality' element={<ManageQualityScreen />} />
        </Routes>
    )
}
