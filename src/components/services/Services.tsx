import React from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <img src="src\assets\images\leaf-left.png" alt="Leaf Left" className="leaf-left" />
      <img src="src\assets\images\leaf-right.png" alt="Leaf Right" className="leaf-right" />

      <div className="services-header">
        <div className="services-welcome">
          <img
            src="src\assets\images\welcome-bg.png"
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
          icon="src\assets\images\icon-stone.png"
          title="Stone spa"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <ServiceCard
          icon="src\assets\images\icon-candle.png"
          title="Candle Message"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <ServiceCard
          icon="src\assets\images\icon-mortar.png"
          title="Mortar"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
        <ServiceCard
          icon="src\assets\images\icon-medicine.png"
          title="Medicine"
          text="Risus commodo viverra maecenas accumsan lacus vel facilisis."
        />
      </div>
    </section>
  );
};

export default Services;
