import React from "react";
import { Route, Routes } from "react-router";
import Login from "./page/login";
import Main from "./page/Main";
import Signup from "./page/Signup";
import Header from "./layout/Header";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
