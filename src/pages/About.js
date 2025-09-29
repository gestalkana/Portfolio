import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

function About() {
  return (
    <AnimatedSection>
      <section aria-label="À propos de moi" className="page about max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#58a6ff] mb-6">
          À propos de moi
        </h1>
        <p className="text-base leading-relaxed mb-4">
          Bonjour, je suis <strong>Gabriel Andriamahafaly</strong>, développeur fullstack spécialisé en <strong>Laravel</strong> et <strong>React</strong>. Je développe des applications web, mobiles et desktop sur mesure, adaptées aux besoins spécifiques de particuliers, startups et PME.
        </p>
        <p className="text-base leading-relaxed mb-4">
          Avec plusieurs expériences en freelance, j’ai accompagné diverses entreprises dans la réalisation de solutions robustes, évolutives et centrées utilisateur.
        </p>
        <p className="text-base leading-relaxed mb-4">
          Passionné par le <strong>partage de connaissances</strong>, j’organise parfois des ateliers public et privé, webinaires et événements tech. J’ai même eu l’occasion de collaboré avec des experts internationaux, dont des intervenants de <strong>Belgique</strong>, sur des sessions autour d’<strong>Odoo</strong>.
        </p>
        <p className="text-base leading-relaxed mb-8">
          Je suis ouvert à toute collaboration technique ou événementielle. N’hésitez pas à me contacter pour échanger !
        </p>
      </section>

      <section aria-label="Contact" className="page contact max-w-3xl mx-auto px-4 py-8 border-t border-gray-300">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#58a6ff] mb-6">
          Contact
        </h1>
        <p className="text-base mb-6">
          Vous pouvez me contacter par email ou via mes réseaux sociaux :
        </p>
        <ul className="list-none pl-0">
          <li className="mb-4 flex items-center">
            <FaEnvelope className="mr-3 text-[#D44638]" aria-hidden="true" />
            <span>Email :</span>
            <a
              href="mailto:gestalkana@gmail.com"
              className="ml-2 text-blue-500 hover:underline"
            >
              gestalkana@gmail.com
            </a>
          </li>
          <li className="mb-4 flex items-center">
            <FaGithub className="mr-3" aria-hidden="true" />
            <span>GitHub :</span>
            <a
              href="https://github.com/gestalkana"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:underline"
            >
              gestalkana
            </a>
          </li>
          <li className="mb-4 flex items-center">
            <FaLinkedin className="mr-3 text-[#0A66C2]" aria-hidden="true" />
            <span>LinkedIn :</span>
            <a
              href="https://linkedin.com/in/gabriel-andriamahafaly-indriantsilazo-839448262/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:underline"
            >
              Gabriel Andriamahafaly
            </a>
          </li>
          <li className="mb-4 flex items-center">
            <FaDiscord className="mr-3 text-[#7289DA]" aria-hidden="true" />
            <span>Discord :</span>
            <a
              href="https://discord.gg/UpjuQRY6"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:underline"
            >
              gestalkana0745
            </a>
          </li>
        </ul>
      </section>
    </AnimatedSection>
  );
}

export default About;
