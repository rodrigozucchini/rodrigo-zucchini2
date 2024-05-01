import React from "react";
import "./Navbar.css";
import logo from "../assets/logorz.png";

const Navbar = () => {
  return (
    <div className="navbar-background">
      <nav className="navbar-content">
        <div className="navbar-logo-principal">
          <img src={logo} className="navbar-image" alt="Logo" />
        </div>

        <div className="div-navbar">
          <a href="https://wa.link/ue0uv8" className="navlink-last">
            LLAMADA ESTRATEGICA
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
