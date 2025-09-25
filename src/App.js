import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

import { FormspreeProvider } from '@formspree/react';

<FormspreeProvider project="">
  <App />
</FormspreeProvider>

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
       <Footer />
    </Router>
  );
}

export default App;
