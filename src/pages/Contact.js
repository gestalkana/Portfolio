import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import "./Contact.css";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Adresse email invalide.");
      return;
    }

    // Envoi via EmailJS
    emailjs.send(
      'service_q50hs1m',       // Remplace par ton Service ID
      'template_qciwzn8',      // Remplace par ton Template ID
      formData,                // Les données du formulaire envoyées à EmailJS
      'K6hlk5U7Z1Ugljm0l'        // Remplace par ta Public Key (User ID)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, (err) => {
      console.log('FAILED...', err);
      alert("Une erreur est survenue, veuillez réessayer.");
    });
  };

  return (
    <AnimatedSection>
      <section className="page contact">
        <h1>Me contacter</h1>
        <p>Vous pouvez m’envoyer un message directement via ce formulaire :</p>

        {submitted && <p className="success-msg">✅ Message envoyé ! Je vous répondrai rapidement.</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nom :
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
            />
          </label>

          <label>
            Email :
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
            />
          </label>

          <label>
            Message :
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
            ></textarea>
          </label>

          <button type="submit" className="btn-primary">Envoyer</button>
        </form>
      </section>
    </AnimatedSection>
  );
}

export default Contact;
