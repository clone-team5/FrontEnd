import React from "react";
import { Route, Routes } from "react-router";
import Login from "./page/Login";
import Main from "./page/Main";
import Signup from "./page/Signup";
import Frame from "./layout/Frame";
import Brands from "./page/Brands";

function App() {
  return (
    <Frame>
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="brands" element={<Brands />} />
      </Routes>
    </Frame>
  );
}

export default App;
