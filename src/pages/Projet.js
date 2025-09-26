import React, { useState } from "react";
import ProjetCard from "../components/ProjetCard";
import "./Projet.css";

const projets = [
  {
    title: "Test Projet 1",
    description: "Description du projet 1",
    repository: "https://github.com/tonpseudo/projet1",
    image: "/images/GR/photo-1.png",
    screenshots: ["/images/GR/photo-1.png", "/images/GR/photo-2.png"],
  },
  {
    title: "Test Projet 2",
    description: "Description du projet 2",
    repository: "https://github.com/tonpseudo/projet2",
    image: "/images/GS/photo-1.png",
    screenshots: ["/images/GS/photo-1.png", "/images/GS/photo-2.png"],
  },
  {
    title: "Test Projet 3",
    description: "Description du projet 3",
    repository: "https://github.com/tonpseudo/projet3",
    image: "/images/GV/photo-1.png",
    screenshots: ["/images/GV/photo-1.png", "/images/GV/photo-2.png"],
  },
];

const Projets = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 2; // ou 2 si tu veux

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projets.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  const visibleProjects = projets.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section className="page projets">
      <h1>Mes Projets</h1>
      <div className="projets-wrapper">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          ◀
        </button>
        <div className="projets-grid">
          {visibleProjects.map((p, idx) => (
            <ProjetCard key={idx} projet={p} />
          ))}
        </div>
        <button onClick={handleNext} disabled={currentIndex + projectsPerPage >= projets.length}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default Projets;
