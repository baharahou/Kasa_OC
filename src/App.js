import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Housing from "./pages/housing/Housing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/housing/*" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
