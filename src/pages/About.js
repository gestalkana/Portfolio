import React from "react";
import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section className="page about">
        <h1>À propos de moi</h1>
        <p>
          Je suis Gabriel Andriamahafaly, développeur fullstack passionné par la création d'applications web modernes, performantes et accessibles.
        </p>
        <p>
          J'utilise des technologies comme <strong>Laravel</strong> pour le backend et <strong>React</strong> pour le frontend. J'aime aussi travailler sur l'UI/UX pour offrir une belle expérience utilisateur.
        </p>
        <p>
          En dehors du code, je suis curieux, j'aime apprendre constamment et relever de nouveaux défis techniques.
        </p>
      </section>
      <section className="page contact">
        <h1>Contact</h1>
        <p>Vous pouvez me contacter par email ou via mes réseaux sociaux :</p>
        <ul>
          <li>Email : <a href="mailto:gabriel@example.com">gabriel@example.com</a></li>
          <li>GitHub : <a href="https://github.com/tonpseudo" target="_blank" rel="noopener noreferrer">github.com/tonpseudo</a></li>
          <li>LinkedIn : <a href="https://linkedin.com/in/tonpseudo" target="_blank" rel="noopener noreferrer">linkedin.com/in/tonpseudo</a></li>
        </ul>
      </section>
    </AnimatedSection>

  );
}

export default About;
