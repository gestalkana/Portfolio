// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    setMenuOpen(false); // Ferme le menu
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <div className="logo">Gabriel Andriamahafaly</div>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
            Accueil
          </NavLink>
          <NavLink to="/projet" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
            Projets
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
            À propos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
            Me contacter
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}


export default Navbar;
