// src/components/ContactSection.tsx
import Section from './Section.tsx';

const ContactSection = () => (
  <Section id="contact" className="bg-dark text-light">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">RELACJI — JOLANTA DOMINIAK-KONDERAK</h2>
      <p className="text-xl text-accent mb-8">PSYCHOLOG</p>
      
      <div className="space-y-24 text-lg">
        <p>
          <a href="mailto:kontakt@wrelacji.com" className="hover:text-accent transition-colors">
            kontakt@wrelacji.com
          </a>
        </p>
        <p>
          <a href="tel:+48690328246" className="hover:text-accent transition-colors">
            +48 690 328 246
          </a>
        </p>
        <p>
          <a 
            href="https://instagram.com/jolanta_psychology" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            @jolanta_psychology
          </a>
        </p>
      </div>
    </div>
  </Section>
);

export default ContactSection;