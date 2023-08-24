import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/About" component={About} />
            <Route path="/contact" omponent={Contact} />
          </Switch> */}
        </Router>
      </DefualtLayout>
    </>
  );
}

export default App;
