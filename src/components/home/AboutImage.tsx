import React from "react";
import "./About.css";
import aboutSpa from "../../assets/images/about-spa.jpg";
import treeBranch from "../../assets/images/tree_branch.png";
import stone from "../../assets/images/stone.png";

const AboutImage: React.FC = () => {
  return (
    <div className="about-image-wrapper">

      <div className="about-image-bg-circle"></div>

      <img
        src={aboutSpa}
        alt="Spa Expert"
        className="about-main-image"
      />

      <img
        src={treeBranch}
        alt="Leaves Decoration"
        className="about-leaves"
      />

      <img
        src={stone}
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
