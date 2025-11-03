import React from "react";
import "./about.css";

const AboutImage: React.FC = () => {
  return (
    <div className="about-image-wrapper">

      <div className="about-image-bg-circle"></div>

      <img
        src="src\assets\images\about-spa.jpg"
        alt="Spa Expert"
        className="about-main-image"
      />

      <img
        src="src\assets\images\tree_branch.png"
        alt="Leaves Decoration"
        className="about-leaves"
      />

      <img
        src="src\assets\images\stone.png"
        alt="Flower Decoration"
        className="about-stone"
      />

      <div className="about-years-circle">
        <h3>20+</h3>
        <p>Years of Expert</p>
      </div>
    </div>
  );
};

export default AboutImage;
