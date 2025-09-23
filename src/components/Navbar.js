// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <div className="logo">Gabriel Andriamahafaly</div>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Accueil
          </NavLink>
          <NavLink to="/projet" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projets
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            À propos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
             Me contacter
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
