import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaEye, FaTimes } from "react-icons/fa";  // Ajout icônes
import "./ProjetCard.css";

function ProjetCard({ projet }) {
  const [showGallery, setShowGallery] = useState(false);

  const toggleGallery = () => setShowGallery((prev) => !prev);

  return (
    <motion.div
      className="projet-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      <img
        src={projet.image}
        alt={`Image principale du projet ${projet.title}`}
        className="projet-image"
        loading="lazy"
      />

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
            className="btn btn-repo btn-small"
            aria-label={`Voir le dépôt GitHub de ${projet.title}`}
            title="Repository GitHub"
          >
            <FaGithub size={16} /> Repository
          </a>
        )}
        {projet.screenshots?.length > 0 && (
          <button
            onClick={toggleGallery}
            className="btn btn-view btn-small"
            aria-expanded={showGallery}
            aria-label={showGallery ? "Fermer la galerie" : "Voir la galerie"}
          >
            {showGallery ? (
              <>
                <FaTimes size={16} /> Fermer
              </>
            ) : (
              <>
                <FaEye size={16} /> Voir
              </>
            )}
          </button>
        )}
      </footer>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            className="gallery-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleGallery}
          >
            <motion.div
              className="gallery-content"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Galerie du projet ${projet.title}`}
            >
              {projet.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${projet.title} - capture ${i + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjetCard;
