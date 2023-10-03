import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test4 />} />
      </Routes>
    </BrowserRouter>
  );
}
