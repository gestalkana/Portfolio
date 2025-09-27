import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";
import Modal from "./Modal";
import "./ProjetCard.css";

function ProjetCard({ projet }) {
  const [showGallery, setShowGallery] = useState(false);
  const toggleGallery = () => setShowGallery((prev) => !prev);

  const cardClass = `projet-card${showGallery ? " active" : ""}`;

  return (
    <>
      <motion.div
        className={cardClass}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        layout
      >
        <div className="projet-image-wrapper">
          <img
            src={projet.image}
            alt={`Image principale du projet ${projet.title}`}
            className="projet-image"
            loading="lazy"
          />
        </div>

        <div className="projet-content">
          <h3>{projet.title}</h3>
          <p>{projet.description}</p>
        </div>

        <footer className="projet-footer">
          {projet.repository && (
            <a
              href={projet.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-repo"
              title="Repository GitHub"
            >
              <FaGithub size={16} /> Repository
            </a>
          )}
          {projet.screenshots?.length > 0 && (
            <button
              onClick={toggleGallery}
              className="btn btn-view"
              aria-expanded={showGallery}
            >
              {showGallery ? "Fermer" : "Voir"}
            </button>
          )}
        </footer>
      </motion.div>

      {/* Le modal est rendu à la racine */}
      <Modal show={showGallery} onClose={toggleGallery} projet={projet} />
    </>
  );
}

export default ProjetCard;
