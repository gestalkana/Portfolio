import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/projet", label: "Projets" },
  { path: "/about", label: "À propos" },
  { path: "/contact", label: "Me contacter" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-[#0d1117]/85 backdrop-blur-md border-b border-white/10 shadow-md px-6 py-3"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1100px] mx-auto flex justify-between items-center">
        <div className="text-[#58a6ff] font-bold text-xl tracking-wide">
          Gabriel Andriamahafaly
        </div>

        <button
          className="md:hidden text-2xl text-[#c9d1d9]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          ☰
        </button>

        <div className="hidden md:flex gap-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `text-[#c9d1d9] font-medium px-4 py-2 rounded-full transition duration-200 ${
                  isActive
                    ? "bg-[#58a6ff33] text-[#58a6ff]"
                    : "hover:bg-[#58a6ff22] hover:text-[#58a6ff]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 h-[calc(100vh-56px)] w-72 bg-[#0d1117] border-l border-white/10 shadow-lg p-6 flex flex-col md:hidden z-[1050]"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.15 }}
            ref={menuRef}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#58a6ff] font-semibold text-lg">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#8b949e] hover:text-white text-xl transition"
                aria-label="Fermer le menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium px-4 py-2 rounded transition duration-200 ${
                      isActive
                        ? "bg-[#58a6ff33] text-[#58a6ff]"
                        : "text-[#c9d1d9] hover:bg-[#58a6ff22] hover:text-[#58a6ff]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-auto text-sm text-[#8b949e] hover:text-white transition self-start"
            >
              Fermer le menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
