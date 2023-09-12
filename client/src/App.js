


import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddTest,
  Admin,
  ErrorPage,
  Home,
  LogIn,
  Registration,
  Test,
} from "./components/pages/export";
import AdminLogIn from "./components/pages/admin/pages/AdminLogIn";
function App() {
  const [isAdminLogIn, setIsAdminLogIn] = useState(true);
 function erro() {
   setIsAdminLogIn(true)
 } 
  return (
    <div className="body_color_primary">
      <Routes>
        <Route path="/" element={<Home />} />
        {isAdminLogIn ? (
          <>
            <Route path="/admin" element={<Admin onClick={erro} />} />
            <Route path="/admin/add-test" element={<AddTest />} />
          </>
        ) : (
          <Route path="/admin" element={<AdminLogIn onClick={erro} />} />
        )}

        <Route path="/test" element={<Test />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
