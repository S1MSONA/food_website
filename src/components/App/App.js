import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefualtLayout from "../layout/DefualtLayout";
import Navigation from "../nav/navigation";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
function App() {
  return (
    <>
      <DefualtLayout>
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </DefualtLayout>
    </>
  );
}

export default App;
