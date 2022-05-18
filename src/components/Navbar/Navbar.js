import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from './images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={logo} className="nav-logo" alt="logo"/>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addrecipe"
                className="nav-links"
                onClick={handleClick}
              >
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myrecipe"
                className="nav-links"
                onClick={handleClick}
              >
                My Recipe
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} style={{"color": '#FFEE1A'}}></i>
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar