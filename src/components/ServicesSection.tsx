// src/components/ServicesSection.tsx
import Section from './Section.tsx';

const ServiceCard = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="text-5xl font-bold text-primary mb-4">{number}</div>
    <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
    <p className="text-dark">{description}</p>
  </div>
);

const ServicesSection = () => (
  <Section id="services" className="bg-light">
    <div className="grid md:grid-cols-3 gap-8">
      <ServiceCard
        number="1"
        title="KONSULTACJA PSYCHOLOGICZNA"
        description="Spotkanie, które może być pierwszym krokiem do głębszej pracy terapeutycznej lub jednorazowym spotkaniem pomagającym spojrzeć na trudność z nowej perspektywy."
      />
      <ServiceCard
        number="2"
        title="TERAPIA PSYCHOLOGICZNA"
        description="Regularne sesje terapeutyczne, których celem jest odnalezienie źródeł trwających trudności wraz ze zmianą schematów i sposobów reagowania na te bardziej wspierające sposoby funkcjonowania."
      />
      <ServiceCard
        number="3"
        title="MENTORING"
        description="W ramach mentoringu pracujemy nad konkretnymi celami, wzmocnieniem zasobów i tworzeniu nowych nawyków. Jeśli czujesz, że niekoniecznie szukasz terapii, ale chcesz bardziej świadomie kształtować swoje życie i decyzje."
      />
    </div>
  </Section>
);

export default ServicesSection;
