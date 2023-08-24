import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">Food Website</div>
      <ul className="nav-lists">
        <li>
          <NavLink exact to="/" className={"nav-links"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/menu" className={"nav-links"}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className={"nav-links"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className={"nav-links"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
