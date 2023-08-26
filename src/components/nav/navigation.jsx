import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <div className="logo">Food Website</div>
      <ul className="nav-lists">
        <li>
          <Link to="/home" className={"nav-links"}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className={"nav-links"}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" className={"nav-links"}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={"nav-links"}>
            Contact
          </Link>
        </li>
        {props.children}
      </ul>
    </nav>
  );
};

export default Navigation;
