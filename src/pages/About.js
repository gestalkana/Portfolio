import React from "react";
import AnimatedSection from "../components/AnimatedSection";
 import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

function About() {
  return (
    <AnimatedSection>
      <section className="page about">
          <h1>À propos de moi</h1>
          <p>
            Bonjour, je suis <strong>Gabriel Andriamahafaly</strong>, développeur fullstack spécialisé en <strong>Laravel</strong> et <strong>React</strong>. 
            Je conçois des applications <strong>web</strong>, <strong>mobiles</strong> et <strong>desktop</strong> sur mesure, adaptées aux besoins spécifiques de chacun : particuliers, startups, PME ou projets personnels.
          </p>
          <p>
            Fort de plusieurs expériences en tant que freelance, j’ai collaboré avec différentes entreprises pour donner vie à leurs idées à travers des solutions techniques robustes, évolutives et centrées utilisateur.
          </p>
          <p>
            En dehors du développement, je suis aussi passionné par le <strong>partage de connaissances</strong>. J’organise régulièrement des ateliers express, des webinaires et d'autres événements communautaires.
            J’ai même eu le plaisir d’inviter des spécialistes internationaux, notamment venus de <strong>Belgique</strong>, lors de sessions autour d’<strong>Odoo</strong>.
          </p>
          <p>
            Je suis <strong>ouvert à toute forme de collaboration</strong>, que ce soit pour un projet ou pour un événement autour du développement et de la tech.
            N’hésitez pas à me contacter si vous souhaitez discuter, travailler ensemble ou simplement échanger autour de nos passions communes.
          </p>
        </section>
        <section className="page contact">
          <h1>Contact</h1>
          <p>Vous pouvez me contacter par email ou via mes réseaux sociaux :</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <FaEnvelope style={{ marginRight: '8px', color: '#D44638' }} />
              Email : <a href="mailto:gabriel@example.com" style={{ marginLeft: '5px' }}>gestalkana@gmail.com</a>
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <FaGithub style={{ marginRight: '8px' }} />
              GitHub : <a href="https://github.com/gestalkana" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}>gestalkana</a>
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <FaLinkedin style={{ marginRight: '8px', color: '#0A66C2' }} />
              LinkedIn : <a href="https://linkedin.com/in/gabriel-andriamahafaly-indriantsilazo-839448262/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}>Gabriel Andriamahafaly</a>
            </li>
            <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <FaDiscord style={{ marginRight: '8px', color: '#7289DA' }} />
              Discord :<a href="https://discord.gg/UpjuQRY6" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}>gestalkana0745</a>
            </li>
          </ul>
        </section>

    </AnimatedSection>

  );
}

export default About;
