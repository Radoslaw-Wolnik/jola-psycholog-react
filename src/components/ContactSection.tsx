// src/components/ContactSection.tsx
import React from "react";
import Section from "./Section";
import Logo from "../assets/logo.png";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection: React.FC = () => (
  <Section
    id="contact"
    className="relative overflow-hidden"
  >
    {/* full-width, full-height bg image */}
    <div
      className="absolute inset-0 bg-[url('/common/phot.jpg')] bg-contain bg-no-repeat bg-center"
      aria-hidden="true"
    />

    {/* optional color overlay for contrast */}
    <div className="absolute inset-0 bg-black/25" />

    {/* content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      <div className="flex flex-row gap-3 self-start">
        {/* logo + title */}
        <img src={Logo} alt="W Relacji logo" className="h-12 md:h-16 mb-4" />
        <div className="text-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            JOLANTA DOMINIAK-KONDERAK
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            PSYCHOLOG
          </p>
        </div>
      </div>

      {/* contact links, right-aligned */}
      <ul className="w-full md:w-1/3 self-start space-y-4 text-white text-base md:text-lg text-right">
        <li className="flex items-center justify-start space-x-2">
          <Mail className="w-5 h-5 flex-shrink-0" />
          <a
            href="mailto:kontakt@wrelacji.com"
            className="hover:text-accent transition-colors"
          >
            kontakt@wrelacji.com
          </a>
        </li>
        <li className="flex items-center justify-start space-x-2">
          <Phone className="w-5 h-5 flex-shrink-0" />
          <a
            href="tel:+48690328246"
            className="hover:text-accent transition-colors"
          >
            +48 690 328 246
          </a>
        </li>
        <li className="flex items-center justify-start space-x-2">
          <Instagram className="w-5 h-5 flex-shrink-0" />
          <a
            href="https://instagram.com/jolanta_psychology"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
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
