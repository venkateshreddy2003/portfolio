import React from "react";
import "./Navbar.css";
import logo from "../../assets/developer-logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="#skills-container">Skills</a>
          </li>
          <li>
            <Link to={"/projects"}>projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
