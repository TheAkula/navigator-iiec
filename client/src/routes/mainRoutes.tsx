import { Routes, Route } from "react-router";
import { Home, OurPride, Requests, Student } from '../components/views';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/student" element={<Student />} />
      <Route path="/our-pride" element={<OurPride />} />
    </Routes>
  );
};

