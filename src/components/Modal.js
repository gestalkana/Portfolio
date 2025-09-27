import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";
import "./Modal.css"; // tu peux réutiliser ton CSS actuel

function Modal({ show, onClose, projet }) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projet.image}
              alt={projet.title}
              className="modal-image"
              loading="lazy"
            />
            <button onClick={onClose} className="btn btn-close-floating">
              <FaTimes />
            </button>
            <div className="modal-text">
              <h2>{projet.title}</h2>
              <p>{projet.description}</p>
              {projet.repository && (
                <a
                  href={projet.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-repo"
                >
                  <FaGithub size={16} /> Voir le code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
