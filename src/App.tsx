import React from "react";
import { Route, Routes } from "react-router";
import Login from "./page/Login";
import Main from "./page/Main";
import Signup from "./page/Join";
import Header from "./layout/Header";
import Frame from "./layout/Frame";
import Brands from "./page/Brands";

export const PATHS = {
  MAIN: "/",
  LOGIN: "login",
};

function App() {
  return (
    <Frame>
      <Routes>
        <Route index element={<Main />} />
        <Route path="brands" element={<Brands />} />

        <Route path="login" element={<Login />}>
          <Route></Route>
          <Route></Route>
        </Route>
        <Route path="join" element={<Signup />} />
      </Routes>
    </Frame>
  );
}

export default App;
