import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from './images/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} className="nav-logo" alt="logo"/>
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addrecipe"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Recipe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/myrecipe"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Recipe
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar