// src/components/ServicesSection.tsx
import Section from './Section';
import clsx from 'clsx';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}
const ServiceCard = ({ 
  number, 
  title, 
  description,
  className,
}: ServiceCardProps) => (
  <div
    className={clsx(
      'bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center',
      className,
    )}
  >
    <div className="text-5xl font-bold text-primary mb-4">{number}</div>
    <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
    <p className="text-dark">{description}</p>
  </div>
);

interface ImageCardProps {
  url: string;
  alt: string;
  className?: string;
}
const ImageCard = ({ 
  url,
  alt,
  className,
}: ImageCardProps) => (
  <div
    className={clsx(
      'hidden md:flex justify-center bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow',
      className,
    )}
  >
    <img 
      src={url}
      alt={alt}
      className="w-2/3 sm:w-auto h-auto rounded-2xl" 
    />
  </div>
);

const ServicesSection = () => (
  <Section id="services" className="bg-light" title="OFERUJĘ">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Image1 (col1 on lg, row1) */}
      <ImageCard
        url="photo"
        alt="photo"
        className="md:order-2 lg:order-1"
      />
      {/* Service1 (col2 on lg, row1) */}
      <ServiceCard
        number="1"
        title="KONSULTACJA PSYCHOLOGICZNA"
        description="Spotkanie, które może być pierwszym krokiem do głębszej pracy terapeutycznej lub jednorazowym spotkaniem pomagającym spojrzeć na trudność z nowej perspektywy."
        className="md:order-1 lg:order-2"
      />
      {/* Image2 (col3 on lg, row1) */}
      <ImageCard
        url="photo"
        alt="photo"
        className="md:order-3 lg:order-3"
      />

      {/* Service2 (col1 on lg, row2) */}
      <ServiceCard
        number="2"
        title="TERAPIA PSYCHOLOGICZNA"
        description="Regularne sesje terapeutyczne, których celem jest odnalezienie źródeł trwających trudności wraz ze zmianą schematów i sposobów reagowania na te bardziej wspierające sposoby funkcjonowania."
        className="md:order-4 lg:order-4"
      />
      {/* Image3 (col2 on lg, row2) */}
      <ImageCard
        url="photo"
        alt="photo"
        className="md:order-6 lg:order-5"
      />
      {/* Service3 (col3 on lg, row2) */}
      <ServiceCard
        number="3"
        title="MENTORING"
        description="W ramach mentoringu pracujemy nad konkretnymi celami, wzmocnieniem zasobów i tworzeniu nowych nawyków. Jeśli czujesz, że niekoniecznie szukasz terapii, ale chcesz bardziej świadomie kształtować swoje życie i decyzje."
        className="md:order-5 lg:order-6"
      />
    </div>
  </Section>
);

export default ServicesSection;
