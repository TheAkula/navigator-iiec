import { Routes, Route } from "react-router";
import Main from "../views/main";
import OurPride from "../views/our-pride";
import Requests from "../views/requests";
import Student from "../views/student";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/student" element={<Student />} />
      <Route path="/our-pride" element={<OurPride />} />
    </Routes>
  );
};

export default MainRoutes;
