// src/components/spaExperience/SpaExperience.tsx
import React from "react";
import "./spaExperience.css";
import SpaCard from "./SpaCard";

const SpaExperience: React.FC = () => {
  return (
    <section className="spa-section">
      <div className="spa-header">
        {/* Welcome text with background image */}
        <div className="spa-welcome-container">
          <img
            src="src\assets\images\welcome-icon.png"
            alt="Decorative Background"
            className="spa-welcome-bg"
          />
          <span className="spa-welcome-text">Welcome</span>
        </div>

        <h2 className="spa-title">
          An Increadible <span>Spa Experience</span>
        </h2>
        <p className="spa-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>

      <div className="spa-cards">
        <SpaCard
          title="Clay Masks"
          text="A good clay mask can go a long way to draw out impurities skin."
          image=""
        />
        <SpaCard
          title="Wellness & Spa"
          text="A good clay mask can go a long way to draw out impurities skin."
          image=""
          highlight
        />
      </div>
    </section>
  );
};

export default SpaExperience;
