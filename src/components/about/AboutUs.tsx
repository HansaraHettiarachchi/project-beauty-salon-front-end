import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const AboutUs: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <AboutImage />
        </motion.div>

        <motion.div
          className="about-content-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <AboutContent />
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="about-bg-circle about-bg-left"></div>
      <div className="about-bg-circle about-bg-right"></div>
    </section>
  );
};

export default AboutUs;
