
import React from "react";
import aboutHero from "../../assets/images/about-hero-bg.png";
// import treeBranch from "../../assets/images/tree_branch.png";
import stone from "../../assets/images/stone.png";

const BeautyandSpaImage: React.FC = () => {
  return (
    <div className="about-image-wrapper">

      <div className="about-image-bg-circle"></div>

      <img
        src={aboutHero}
        alt="Spa Expert"
        className="about-main-image"
      />

      {/* <img
        src={treeBranch}
        alt="Leaves Decoration"
        className="about-leaves"
      /> */}

      <img
        src={stone}
        alt="Flower Decoration"
        className="about-stone"
      />

      
    </div>
  );
};



export default  BeautyandSpaImage;
