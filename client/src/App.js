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
 function error() {
   setIsAdminLogIn()
 }
  return (
    <div className="body_color_primary">
      <Routes>
        <Route path="/" element={<Home />} />
        {isAdminLogIn ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add-test" element={<AddTest />} />
          </>
        ) : (
          <Route path="/admin" element={<AdminLogIn onClick />} />
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
