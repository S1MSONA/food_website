import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">Food Website</div>
      <ul className="nav-lists">
        <li className="nav-links">Home</li>
        <li className="nav-links">Menu</li>
        <li className="nav-links">About</li>
        <li className="nav-links">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
