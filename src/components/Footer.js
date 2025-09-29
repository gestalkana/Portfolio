import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161b22] text-[#c9d1d9] py-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact */}
        <div>
          <h4 className="text-[#58a6ff] text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col space-y-2 text-sm sm:text-base">
            <a
              href="mailto:gestalkana@gmail.com"
              title="Envoyer un e-mail"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors"
            >
              <FaEnvelope /> gestalkana@gmail.com
            </a>
            <a
              href="tel:+261344879509"
              title="Appeler"
              className="flex items-center gap-2 hover:text-[#58a6ff] transition-colors"
            >
              <FaPhoneAlt /> +261 34 48 795 09
            </a>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-[#58a6ff] text-lg font-semibold mb-4">Réseaux</h4>
          <div className="flex space-x-6 text-2xl text-[#8b949e]">
            <a
              href="https://github.com/gestalkana"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-[#58a6ff] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/gabriel-andriamahafaly-indriantsilazo-839448262/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-[#58a6ff] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.gg/UpjuQRY6"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
              className="hover:text-[#58a6ff] transition-colors"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Signature */}
        <div className="text-sm sm:text-base">
          <h4 className="text-[#58a6ff] text-lg font-semibold mb-4">Portfolio</h4>
          <p className="mb-1">
            Développé par <strong>Gabriel Andriamahafaly</strong>
          </p>
          <p className="text-[#8b949e] text-xs sm:text-sm">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
