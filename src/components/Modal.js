// src/components/Modal.js
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Modal({ show, onClose, projet }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`
              relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden
              bg-[#1a1a1a] text-white rounded-xl shadow-2xl p-6 flex flex-col gap-6
              border border-white/20
              before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br
              before:from-[#3a7bd5] before:to-[#00d2ff] before:opacity-20 before:blur-2xl
            `}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-white/20 transition p-2 rounded-full text-white z-10"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>

            {/* Affichage des images */}
            <div className="flex-shrink-0">
              {projet.screenshots && projet.screenshots.length > 1 ? (
                <div className="w-full max-h-[70vh] overflow-hidden rounded-lg">
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay={false}
                    emulateTouch
                    dynamicHeight={false}
                  >
                    {projet.screenshots.map((src, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center bg-black"
                      >
                        <img
                          src={src}
                          alt={`Screenshot ${idx + 1}`}
                          className="max-h-[70vh] object-contain mx-auto"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              ) : (
                <motion.img
                  src={projet.image}
                  alt={projet.title}
                  loading="lazy"
                  className="w-auto max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </div>

            {/* Texte + Lien */}
            <div className="flex flex-col gap-4 flex-shrink-0">
              <h2 className="text-2xl font-semibold">{projet.title}</h2>
              <p className="text-sm opacity-90 leading-relaxed">
                {projet.description}
              </p>

              {projet.repository && (
                <a
                  href={projet.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 cursor-pointer inline-flex items-center gap-2 bg-[#222] hover:bg-[#444] transition text-white text-sm px-4 py-2 rounded-md w-fit"
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
