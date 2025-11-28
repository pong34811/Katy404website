import { Routes, Route, Router } from "react-router-dom";

import Nopage404 from "../pages/Nopage404";
import MainPages from "../index.jsx";


import MainLayout from "../layouts/MainLayout";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPages />} />
      </Route>

      <Route path="*" element={<Nopage404 />} />
    </Routes>
  );
}

export default AppRoutes;
