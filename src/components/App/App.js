import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefualtLayout from "../layout/DefualtLayout";
import Navigation from "../nav/navigation";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
function App() {
  return (
    <>
      <DefualtLayout>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" Component={Home} />
            <Route path="/menu" Component={Menu} />
            <Route path="/About" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Switch>
        </Router>
      </DefualtLayout>
    </>
  );
}

export default App;
