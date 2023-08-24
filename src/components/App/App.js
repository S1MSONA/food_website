import React from "react";
import "./app.css";
import DefualtLayout from "../layout/DefualtLayout";
import Navigation from "../nav/navigation";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
function App() {
  return (
    <div>
      <DefualtLayout>
        <Navigation />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </DefualtLayout>
    </div>
  );
}

export default App;
