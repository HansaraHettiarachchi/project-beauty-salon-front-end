import React from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";
import leafLeft from "../../assets/images/leaf-left.png";
import leafRight from "../../assets/images/leaf-right.png";
import welcomeBg from "../../assets/images/welcome-bg.png";
import iconStone from "../../assets/images/icon-stone.png";
import iconCandle from "../../assets/images/icon-candle.png";
import iconMortar from "../../assets/images/icon-mortar.png";
import iconMedicine from "../../assets/images/icon-medicine.png";

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <img src={leafLeft} alt="Leaf Left" className="leaf-left" />
      <img src={leafRight} alt="Leaf Right" className="leaf-right" />

      <div className="services-header">
        <div className="services-welcome">
          <img
            src={welcomeBg}
            alt="Decorative Icon"
            className="services-welcome-bg"
          />
          <span className="services-welcome-text">What We Do</span>
        </div>

        <h2 className="services-title">
          Our <span>Services</span>
        </h2>

        <p className="services-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>

      <div className="services-grid">
        <ServiceCard
          icon={iconStone}
          title="Stone spa"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <ServiceCard
          icon={iconCandle}
          title="Candle Message"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <ServiceCard
          icon={iconMortar}
          title="Mortar"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <ServiceCard
          icon={iconMedicine}
          title="Medicine"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
      </div>
    </section>
  );
};

export default Services;
