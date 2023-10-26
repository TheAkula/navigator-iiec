import { Route, Routes, useNavigate } from 'react-router'
import { Home, Requests, Student } from '../components/views'
import { MainScreen, ManageQualityScreen } from '../screens'
import { AuthScreen } from '../screens/auth-screen'
import { MethodSupportScreen } from '../screens/method-support-screen'
import { useFileViewerContext } from '../context/file-viewer-context'
import { useEffect } from 'react'

export const MainRoutes = () => {
  const navigate = useNavigate()
  const { reset } = useFileViewerContext()

  const hasJWTtoken = () => {
    return !!localStorage.getItem('token')
  }

  useEffect(() => {
    if (!hasJWTtoken()) {
      reset()
      navigate('/login')
    }
  }, [navigate, reset])

  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/student" element={<Student />} />
      </Route>

      <Route path="/method-support" element={<MethodSupportScreen />} />
      <Route path="/manage-quality" element={<ManageQualityScreen />} />

      <Route path="/login" element={<AuthScreen />} />
    </Routes>
  )
}
