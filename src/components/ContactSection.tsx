// src/components/ContactSection.tsx
import React from "react";
import Section from "./Section";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection: React.FC = () => (
  <Section
    id="contact"
    className="overflow-hidden"
    bgImageUrl="forest_bg_contact.jpg"
    // overlayClassName="bg-black/25"
  >

    {/* optional color overlay for contrast 
    <div className="absolute inset-0 bg-black/25" />*/}

    {/* content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col items-start">
      {/* Left: Logo */}
      <div className="flex flex-row items-end" >
        <img 
          src="logo-no-bg.png" 
          alt="W Realcji logo"
          className="h-16 md:h-24 lg:h-32 w-auto " // Adjust height as needed
        />
        <div className="text-center">
          <h2 className="text-black-p text-tiny xsm:text-xs md:text-lg font-logo">
            JOLANTA DOMINIAK-KONDERAK
          </h2>
          <p className="text-black-p/90 text-xs xsm:text-sm ">
            PSYCHOLOG
          </p>
        </div>
      </div>
      <div className="pt-4"></div>
      {/* contact links, right-aligned */}
      <ul className="w-full md:w-1/3 self-start space-y-4 text-black_p text-base md:text-lg lg:text-xl text-right">
        <li className="">
          
          <a
            href="mailto:kontakt@wrelacji.com"
            className="hover:text-text-hover-accent transition-colors flex flex-row gap-2 items-center justify-start"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            kontakt@wrelacji.com
          </a>
        </li>
        <li className="">
          
          <a
            href="tel:+48690328246"
            className="hover:text-text-hover-accent transition-colors flex flex-row gap-2 items-center justify-start"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            +48 690 328 246
          </a>
        </li>
        <li className="">
          
          <a
            href="https://instagram.com/jolanta_psychology"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-hover-accent transition-colors flex flex-row gap-2 items-center justify-start"
          >
            <Instagram className="w-5 h-5 flex-shrink-0" />
            @jolanta_psychology
          </a>
        </li>
      </ul>

      {/* this bottom padding just ensures you can always scroll down to see the full image */}
      <div className="h-64 md:h-96" aria-hidden="true" />
    </div>
  </Section>
);

export default ContactSection;
