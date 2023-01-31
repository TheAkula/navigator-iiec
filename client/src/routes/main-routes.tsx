import { Route, Routes } from 'react-router'
import { Home, Requests, Student } from '../components/views'
import { MainScreen, ManageQualityScreen } from '../screens'
import { AuthScreen } from '../screens/auth-screen'
import { MethodSupportScreen } from '../screens/method-support-screen'

export const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MainScreen />}>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/student" element={<Student />} />
        <Route path='/photos' element={<Home />} />
        <Route path='/videos' element={<Home />} />
        <Route path='/gateway' element={<Home />} />
      </Route>

      <Route path="/method-support" element={<MethodSupportScreen />} />
      <Route path="/manage-quality" element={<ManageQualityScreen />} />

      <Route path="/login" element={<AuthScreen />} />
    </Routes>
  )
}
