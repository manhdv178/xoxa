/* eslint-disable */
import "./App.css";
import "./assets/css/font.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
