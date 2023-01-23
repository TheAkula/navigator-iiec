import { Route, Routes } from 'react-router'
import { Home, Requests, Student } from '../components/views'
import { MainScreen, ManageQualityScreen } from '../screens'
import { MethodSupportScreen } from '../screens/method-support-screen'

export const AdditionalyRouter = () => {
<<<<<<< Updated upstream
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
=======
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/method-support" element={<MethodSupportScreen />} />
      <Route path="/manage-quality" element={<ManageQualityScreen />} />
    </Routes>
  )
>>>>>>> Stashed changes
}
