import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError("Adresse email invalide.");
      return;
    }

    emailjs.send(
      'service_q50hs1m',       // Remplace par ton Service ID
      'template_qciwzn8',      // Remplace par ton Template ID
      formData,
      'K6hlk5U7Z1Ugljm0l'     // Remplace par ta Public Key (User ID)
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setError("");
    })
    .catch(() => {
      setError("Une erreur est survenue, veuillez réessayer.");
    });
  };

  return (
    <AnimatedSection>
      <section className="page contact max-w-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#58a6ff] mb-6">Me contacter</h1>
        <p className="mb-6 text-gray-300">Vous pouvez m’envoyer un message directement via ce formulaire :</p>

        {error && <p className="mb-4 text-red-600 font-semibold">{error}</p>}
        {submitted && <p className="mb-4 text-green-500 font-semibold">✅ Message envoyé ! Je vous répondrai rapidement.</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <label className="flex flex-col text-gray-300">
            <span className="mb-2 font-medium">Nom :</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="bg-[#0d1117] border border-gray-700 rounded-md p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
              required
            />
          </label>

          <label className="flex flex-col text-gray-300">
            <span className="mb-2 font-medium">Email :</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="bg-[#0d1117] border border-gray-700 rounded-md p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
              required
            />
          </label>

          <label className="flex flex-col text-gray-300">
            <span className="mb-2 font-medium">Message :</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              className="bg-[#0d1117] border border-gray-700 rounded-md p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58a6ff]"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="btn-primary bg-[#58a6ff] text-white font-semibold py-2 rounded-md hover:bg-[#3a78d1] transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </AnimatedSection>
  );
}

export default Contact;
