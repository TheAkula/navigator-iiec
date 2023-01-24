import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Home, Requests, Student } from '../components/views'
import { MainScreen, ManageQualityScreen } from '../screens'
import { AuthScreen } from '../screens/auth-screen'
import { MethodSupportScreen } from '../screens/method-support-screen'

export const AdditionalyRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/student" element={<Student />} />
      </Route>
      <Route path="/method-support" element={<MethodSupportScreen />} />
      <Route path="/manage-quality" element={<ManageQualityScreen />} />

      <Route path='/login' element={<AuthScreen />} />
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  )
}
