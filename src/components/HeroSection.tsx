// src/components/HeroSection.tsx
import React from "react";
import Section from "./Section";

const HeroSection: React.FC = () => (
  <Section
    id="hero"
    className="overflow-hidden"
    bgImageUrl="resized/forest_bg_hero.jpg"
    // overlayClassName="bg-black/25"
  >
    {/* optional color overlay for contrast 
    <div className="absolute inset-0 bg-black/25" />*/}
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex flex-col-reverse justyfy-end items-center text-center">
      <div className="super-subtle-blur p-2 rounded-lg">
        <h2 className={`text-white text-xl text-shadow-strong font-text italic `}>
          „To co leczy, to relacja - nie interpretacja”
        </h2>
        <p className={`text-white/90 text-lg `}>
          Isadore From
        </p>
      </div>
      <div className="pt-4"></div>

      {/* this bottom padding just ensures you can always scroll down to see the full image */}
      <div className="h-64 md:h-96" aria-hidden="true" />
    </div>
  </Section>
);

export default HeroSection;
