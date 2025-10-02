import React, { useState } from "react";
import ProjetCard from "../components/ProjetCard";
import Modal from "../components/Modal";

const projets = [
  {
    title: "Gestion de stock",
    description:
      "Application web développée pour permettre une gestion simple, efficace et centralisée des stocks de produits au sein d’une entreprise. Elle permet aux utilisateurs de suivre en temps réel les entrées et sorties de produits, gérer les fournisseurs, consulter les quantités disponibles, et optimiser le réapprovisionnement.",
    repository: "https://github.com/gestalkana/GestionStocks",
    image: "/images/GS/photo-1.png",
    screenshots: ["/images/GS/photo-1.png", "/images/GS/photo-2.png", "/images/GS/photo-3A.png", "/images/GS/photo-4.png", "/images/GS/photo-5.png", "/images/GS/photo-6.png"],
  },
  {
    title: "Application de gestion de réservations",
    description: 
    "Application web de gestion de réservations permettant aux utilisateurs de visualiser et gérer leurs réservations en temps réel. L’interface propose un tableau de bord clair avec des statistiques (réservations du jour, confirmées, en attente, annulées), un planning interactif, une liste des clients récents, ainsi qu’un système de suivi des disponibilités. L’administrateur peut consulter l’historique des réservations, gérer les services proposés, et suivre les performances via des graphiques dynamiques.",
    repository: "https://github.com/gestalkana/GestionReservation",
    image: "/images/GR/photo-1.png",
    screenshots: ["/images/GR/photo-1.png", "/images/GR/photo-2.png", "/images/GR/photo-3.png", "/images/GR/photo-4.png"],
  },
  {
    title: "Miserasoft - Application de Gestion de Vente",
    description:
      "Miserasoft est une application intuitive et performante dédiée à la gestion complète des ventes pour les petites et moyennes entreprises. Conçue pour simplifier le suivi commercial, elle permet de gérer efficacement les commandes, les clients, les paiements, et les articles vendus, tout en offrant un tableau de bord clair des performances.",
    repository: "https://github.com/gestalkana/",
    image: "/images/GV/photo-1.png",
    screenshots: ["/images/GV/photo-1.png", "/images/GV/photo-2.png", "/images/GV/photo-3.png", "/images/GV/photo-4.png", "/images/GV/photo-5.png"],
  },
  {
    title: "Hôtel Taleva – Site vitrine",
    description:
    "Création d’un site vitrine responsive pour l’Hôtel Taleva, conçu pour présenter ses informations clés et faciliter la prise de contact. Le design épuré et adaptable à tous les supports garantit une navigation fluide et professionnelle.",
    repository: "https://github.com/gestalkana/",
    image: "/images/WB/W1.png",
    screenshots: ["/images/WB/W1.png", "/images/WB/W2.png", "/images/WB/W3.png", "/images/WB/W4.png", "/images/WB/W5.png", "/images/WB/W6.png"],
  },
];

const Projets = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProjet, setSelectedProjet] = useState(null);

  const projectsPerPage = 2;

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

  const visibleProjects = projets.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  const openModal = (projet) => setSelectedProjet(projet);
  const closeModal = () => setSelectedProjet(null);

  return (
    <section className="min-h-screen py-10 px-4 bg-[#0d1117] text-white">
      <h1 className="text-4xl font-bold text-center text-[#58a6ff] mb-8">
        Mes Projets
      </h1>

      <div className="flex justify-center items-center gap-6 mb-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="text-2xl text-white hover:text-[#58a6ff] disabled:opacity-30"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + projectsPerPage >= projets.length}
          className="text-2xl text-white hover:text-[#58a6ff] disabled:opacity-30"
        >
          ▶
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-[800px] mx-auto">
        {visibleProjects.map((projet, idx) => (
          <ProjetCard
            key={idx}
            projet={projet}
            onToggleModal={openModal}
          />
        ))}
      </div>

      {/* Modal affiché uniquement si un projet est sélectionné */}
      {selectedProjet && (
        <Modal
          show={true}
          projet={selectedProjet}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projets;
