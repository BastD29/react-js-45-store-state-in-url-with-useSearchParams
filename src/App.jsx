import React from "react";
import Test1 from "./components/Test1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test2 from "./components/Test2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}
