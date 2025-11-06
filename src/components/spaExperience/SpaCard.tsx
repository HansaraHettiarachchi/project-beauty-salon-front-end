import React from "react";

interface SpaCardProps {
  title: string;
  text: string;
  image?: string;
  highlight?: boolean;
}

const SpaCard: React.FC<SpaCardProps> = ({ title, text, highlight }) => {
  return (
    <div className={`spa-card ${highlight ? "highlight" : ""}`}>
      <div className="spa-card-text">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="spa-btn">
          <i className="fas fa-shopping-cart"></i> Shop Now
        </button>
      </div>
      {/* <div className="spa-card-image">
        <img src={image} alt="" />
      </div> */}
    </div>
  );
};

export default SpaCard;
