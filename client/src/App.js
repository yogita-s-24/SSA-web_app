import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Admin,
  Home,
  LogIn,
  Registration,
  Test,
} from "./components/pages/export";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
