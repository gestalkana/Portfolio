import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

function Home({ scrollToProjects }) {
  return (
    <div>
      <header className="header">
        <h1>Gabriel Andriamahafaly</h1>
        <p>Développeur Fullstack | Laravel & React</p>
      </header>

      <AnimatedSection>
        <section className="hero">
          <motion.img
            src="/profil.JPG"
            alt="Photo de profil"
            className="profile-pic"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div className="hero-content">
            <h2>Bienvenue sur mon portfolio</h2>
            <p>
              Je conçois des applications web, mobile et desktop personnalisées pour optimiser la gestion de votre activité.
              </p>
            
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default Home;
