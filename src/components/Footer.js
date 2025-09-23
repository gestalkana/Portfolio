// src/components/Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Contact: <a href="mailto:gabriel@example.com">gestalkana@gmail.com</a>
      </p>
      <p>
        <a href="https://github.com/gestalkana" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com/in/gabriel-andriamahafaly-indriantsilazo-839448262/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p className="footer-copy">© {new Date().getFullYear()} Gabriel Andriamahafaly. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
