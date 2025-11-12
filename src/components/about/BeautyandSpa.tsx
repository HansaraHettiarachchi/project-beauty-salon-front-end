import React from "react";
import { motion } from "framer-motion";
import BeautyandSpaContent from "./BeautyandSpaContent";
import BeautyandSpaImage from "./BeautyandSpaImage";


const BeautyandSpa: React.FC = () => {
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
          <BeautyandSpaImage />
        </motion.div>

        <motion.div
          className="about-content-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <BeautyandSpaContent />
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="about-bg-circle about-bg-left"></div>
      <div className="about-bg-circle about-bg-right"></div>
    </section>
  );
};

export default BeautyandSpa;
