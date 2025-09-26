// src/components/Footer.js

import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-inline">
            <a href="mailto:gestalkana@gmail.com" title="Envoyer un e-mail">
              <FaEnvelope /> gestalkana@gmail.com
            </a>
            <a href="tel:+261344879509" title="Appeler">
              <FaPhoneAlt /> +261 34 48 795 09
            </a>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h4>Réseaux</h4>
          <div className="social-links">
            <a
              href="https://github.com/gestalkana"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/gabriel-andriamahafaly-indriantsilazo-839448262/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.gg/UpjuQRY6"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Signature */}
        <div className="footer-section">
          <h4>Portfolio</h4>
          <p>
            Développé par <strong>Gabriel Andriamahafaly</strong>
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
