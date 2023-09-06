import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Admin,
  ErrorPage,
  Home,
  LogIn,
  Registration,
  Test,
} from "./components/pages/export";
function App() {
  return (
    <div className="h-screen body_color_primary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/*" element={<ErrorPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
