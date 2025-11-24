// src/components/spaExperience/SpaExperience.tsx
import React from "react";

import "./OurTeam.css";
import welcomeIcon from "../../assets/images/welcome-icon.png";
import TeamSection from "./TeamMember";

const OurTeam: React.FC = () => {
  return (
    <section className="spa-section">
      {/* HEADER */}
      <div className="spa-header">
        <div className="spa-welcome-container">
          <img
            src={welcomeIcon}
            alt="Decorative Background"
            className="spa-welcome-bg"
          />
          <span className="spa-welcome-text">Meet With</span>
        </div>

        <h2 className="spa-title">
          Our <span>Team</span>
        </h2>

        <p className="spa-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>

      {/* TEAM GRID */}
      <TeamSection />
    </section>
  );
};

export default OurTeam;
