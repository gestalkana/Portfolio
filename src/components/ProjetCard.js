import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjetCard.css";

function ProjetCard({ projet }) {
  const [showGallery, setShowGallery] = useState(false);

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
        alt={projet.title}
        className="projet-image"
      />

      <div className="projet-content">
        <h3>{projet.title}</h3>
        <p>{projet.description}</p>
      </div>

      <footer className="projet-footer">
        <a
          href={projet.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-repo"
        >
          Repository
        </a>
        <button
          onClick={() => setShowGallery((prev) => !prev)}
          className="btn btn-view"
        >
          {showGallery ? "Fermer" : "Voir"}
        </button>
      </footer>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            className="gallery-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              className="gallery-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projet.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${projet.title} capture ${i + 1}`}
                  className="gallery-image"
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
