// src/components/AnimatedSection.js
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimatedSection({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current; // ✅ on copie la valeur de ref ici

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node); // ✅ on utilise node ici, pas ref.current
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </motion.div>
  );
}
