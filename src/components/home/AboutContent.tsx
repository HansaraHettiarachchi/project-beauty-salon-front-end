import { Button } from "@headlessui/react";
import React from "react";

const AboutContent: React.FC = () => {
  return (
    <div>
      <h4 className="about-subtitle">About Us</h4>
      <h2 className="about-title">Beauty and <span> Spa <br />
      Center</span></h2>
      <p className="about-text"><i><b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> 
        sed do eiusmod tempor.</b></i>
      </p>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />
        do eiusmod tempor incididunt ut labore mel ei harum <br />
        appellantur disputationi
      </p>
      <Button className="about-btn">Learn More</Button>
    </div>
  );
};

export default AboutContent;
