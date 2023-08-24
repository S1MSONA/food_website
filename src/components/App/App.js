import React from "react";
import "./app.css";
import DefualtLayout from "../layout/DefualtLayout";
import Navigation from "../nav/navigation";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
function App() {
  return (
    <div>
      <DefualtLayout>
        <Navigation />
      </DefualtLayout>
      <About />
      <Home />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
