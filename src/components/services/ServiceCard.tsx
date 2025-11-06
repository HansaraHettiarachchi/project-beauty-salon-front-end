import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  text: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, text }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
    </div>
  );
};

export default ServiceCard;
