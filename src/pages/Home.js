import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

function Home({ scrollToProjects }) {
  return (
    <div>
      {/* Header */}
      <header className="text-center py-8 px-4 sm:py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#58a6ff] mb-2">
          Gabriel Andriamahafaly
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e]">
          Développeur Fullstack | Laravel & React
        </p>
      </header>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="flex flex-col md:flex-row items-center gap-8 my-12 px-6 py-8 bg-[#0f161f] rounded-xl shadow-lg shadow-blue-500/20">
          <motion.img
            src="/profil.JPG"
            alt="Photo de profil"
            className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full border-4 border-[#58a6ff] shadow-md shadow-[#58a6ff] object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#58a6ff] mb-3">
              Bienvenue sur mon portfolio !
            </h2>
            <p className="text-base sm:text-lg text-[#8b949e] leading-relaxed">
              Je suis Gabriel Andriamahafaly, développeur spécialisé en{" "}
              <strong>Laravel</strong> et <strong>React</strong>.<br />
              Ce site vous permettra d’en savoir un peu plus sur moi et mes
              projets. <strong>Enjoy !</strong>
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default Home;
