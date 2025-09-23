import React from "react";
import ProjetCard from "../components/ProjetCard";
import "./Projet.css";

const projets = [
  {
    title: "Test Projet 1",
    description: "Description du projet 1",
    repository: "https://github.com/tonpseudo/projet1",
    image: "/images/test1.png",
    screenshots: ["/images/test1-1.png", "/images/test1-2.png"],
  },
  {
    title: "Test Projet 2",
    description: "Description du projet 2",
    repository: "https://github.com/tonpseudo/projet2",
    image: "/images/test2.png",
    screenshots: ["/images/test2-1.png", "/images/test2-2.png"],
  },
];

function Projets() {
  console.log("projets:", projets);
  return (
    <section className="page projets">
      <h1>Mes Projets</h1>
      <div className="projets-grid">
        {projets.map((p, idx) => (
          <ProjetCard key={idx} projet={p} />
        ))}
      </div>
    </section>
  );
}

export default Projets;
