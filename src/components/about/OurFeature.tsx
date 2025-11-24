import React from 'react';
import "./OurFeature.css";

// Images
import leaf from "../../assets/images/leaf-right.png";
import brushBg from "../../assets/images/brushBG.png"; 
import bowl from "../../assets/images/bowl.png"; 

import icon1 from "../../assets/images/icon-candle.png"; 
import icon2 from "../../assets/images/icon-medicine.png"; 
import icon3 from "../../assets/images/icon-mortar.png"; 

// Decorative Edges
import edgeTop from "../../assets/images/Salon BG-01.png"; 
import edgeBottom from "../../assets/images/Salon BG-02.png"; 


interface FeatureItem {
  title: string;
  text: string;
  icon: string;
}

const features: FeatureItem[] = [
  {
    title: "Matt Effects",
    text:
      "Vivamus nec ligula et leo sodales pellentesque id sed lectus. Aliquam viverra velit sagittis pharetra venenatis.",
    icon: icon1,
  },
  {
    title: "Relax Zones",
    text:
      "Vivamus nec ligula et leo sodales pellentesque id sed lectus. Aliquam viverra velit sagittis pharetra venenatis.",
    icon: icon2,
  },
  {
    title: "Hair Dilation", 
    text:
      "Vivamus nec ligula et leo sodales pellentesque id sed lectus. Aliquam viverra velit sagittis pharetra venenatis.",
    icon: icon3,
  },
];

const OurFeature: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fff7f5] overflow-hidden min-h-screen">
      
      {/*  TOP WAVE (edgeTop) - Now using DIV/BACKGROUND IMAGE */}

<div 
    className="absolute inset-x-0 top-0 w-full h-40 md:h-56 bg-no-repeat bg-top bg-cover z-10 pointer-events-none" 
    style={{ backgroundImage: `url(${edgeTop})` }} 
    aria-hidden="true" 
/>
      {/* LEAF IMAGE */}
      <img
        src={leaf}
        alt="leaf"
        className="leaf" 
      />
      
      {/* MAIN CONTENT CONTAINER */}
      {/* Padding adjusted to ensure content starts below the height of the edgeTop graphic */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 pt-40 md:pt-56 pb-12 md:pb-20">
        
        {/* --- SECTION: HEADER/INTRODUCTION --- */}
        <div className="text-center flex flex-col items-center mb-16 md:mb-24 mt-20 md:mt-28 relative">
          
          {/* BRUSH BACKGROUND (brushBg) */}
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-0 opacity-75">
             <img
                src={brushBg}
                alt="Background Smudge"
                className="w-32 h-auto object-contain" 
             />
          </div>

          <p className="text-[16px] text-[#e8a79f] tracking-widest mb-1 uppercase relative z-10">
            Welcome
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4 relative z-10">
            Our <span className="text-[#f58f85]">Feature</span>
          </h2>

          <p className="max-w-3xl text-gray-600 text-[17px] leading-relaxed relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        {/* --- SECTION: FEATURES GRID --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-20 md:mb-32">
          
          {/* LEFT IMAGE: Hair Dye Tools/Bowl */}
          <div className="lg:w-1/3">
            <img 
              src={bowl} 
              alt="Hair Dye Tools" 
              className="w-full max-w-sm lg:max-w-none mx-auto drop-shadow-xl" 
            />
          </div>

          {/* RIGHT GRID: Feature Items */}
          <div className="lg:w-2/3 flex flex-col space-y-8">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start text-left gap-6 p-4" 
              >
                {/* Icon Container (White Circle Background) */}
                <div className="bg-white rounded-full p-4 shadow-lg flex items-center justify-center w-20 h-20">
                  <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 object-contain" />
                </div>

                {/* Text content to the right of the icon */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  BOTTOM WAVE (edgeBottom) - Using DIV/BACKGROUND IMAGE */}
      <div 
          className="absolute inset-x-0 bottom-0 w-full h-40 md:h-56 bg-no-repeat bg-bottom bg-cover z-10 pointer-events-none" 
          style={{ backgroundImage: `url(${edgeBottom})` }} 
          aria-hidden="true" 
      />
      
    </section>
  );
};

export default OurFeature;