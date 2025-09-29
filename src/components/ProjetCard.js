import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function ProjetCard({ projet, onToggleModal }) {
  return (
    <motion.div
      className={`
        relative w-[320px] max-w-full rounded-2xl overflow-hidden p-[1px] 
        bg-white/5 border border-white/10 backdrop-blur-md 
        shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] 
        transition duration-300 transform hover:-translate-y-1
        sm:w-[90%] sm:mx-auto
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      layout
    >
      <div className="h-[180px] overflow-hidden">
        <img
          src={projet.image}
          alt={`Aperçu de projet ${projet.title}`}
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-2">{projet.title}</h3>
        <p className="text-sm opacity-85 leading-snug">
          {projet.description.length > 30
            ? projet.description.slice(0, 30) + "..."
            : projet.description}
        </p>
      </div>

      <footer className="flex justify-between items-center px-4 py-3 border-t border-white/10">
        {projet.repository && (
          <a
            href={projet.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#222] text-white text-sm px-3 py-2 rounded-md hover:bg-[#444] transition"
            title="Repository GitHub"
          >
            <FaGithub size={16} />
            Repository
          </a>
        )}
        {projet.screenshots?.length > 0 && (
          <button
            onClick={() => onToggleModal(projet)}
            className="inline-flex items-center gap-2 bg-[#222] text-white text-sm px-3 py-2 rounded-md hover:bg-[#444] transition"
            aria-expanded={false}
          >
            Voir
          </button>
        )}
      </footer>
    </motion.div>
  );
}

export default ProjetCard;
