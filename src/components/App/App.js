import React from "react";
import "./app.css";
import DefualtLayout from "../layout/DefualtLayout";
import Navigation from "../nav/navigation";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Hero from "../Body/Hero";
function App() {
  return (
    <div>
      <DefualtLayout>
        <Navigation />
      </DefualtLayout>
      <Hero>
        <Home />
        <Menu />
        <About />
        <Contact />
      </Hero>
    </div>
  );
}

export default App;
