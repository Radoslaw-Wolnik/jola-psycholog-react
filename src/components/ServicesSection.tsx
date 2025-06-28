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
      'bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center h-full relative',
      className,
    )}
  >
    {/* Modified number container */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-3xl font-header2 text-black-p bg-light rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
        {number}
      </div>
    </div>
    {/* */}
    <div className="pt-2"> {/* Added top padding to content */}
      <h3 className="text-xl font-header2 text-black-p mb-3">{title}</h3>
      <p className="text-black-p">{description}</p>
    </div>
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
      'hidden md:block relative rounded-xl overflow-hidden h-full p-6 shadow-md hover:shadow-lg transition-shadow',
      className,
    )}
  >
    <div className="absolute inset-0 w-full h-full">
      <img 
        src={url}
        alt={alt}
        className="w-full h-full object-cover" 
      />
    </div>
  </div>
);

const ServicesSection = () => (
  <Section id="services" className="bg-light" title="OFERUJĘ" bgClassName="bg-gradient-top-fade">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Image1 */}
      <ImageCard
        url="card_forest.jpg"
        alt="photo of a coniferous forest with mist on mountain"
        className="md:order-2 lg:order-1"
      />
      
      {/* Service1 */}
      <ServiceCard
        number="1"
        title="KONSULTACJA PSYCHOLOGICZNA"
        description="Spotkanie, które może być pierwszym krokiem do głębszej pracy terapeutycznej lub jednorazowym spotkaniem pomagającym spojrzeć na trudność z nowej perspektywy."
        className="md:order-1 lg:order-2 bg-card-one"
      />
      
      {/* Image2 */}
      <ImageCard
        url="card-laptop.png"
        alt="photo of an opened laptop on desk turned back during sunset"
        className="md:order-3 lg:order-3"
      />

      {/* Service2 */}
      <ServiceCard
        number="2"
        title="TERAPIA PSYCHOLOGICZNA"
        description="Regularne sesje terapeutyczne, których celem jest odnalezienie źródeł trwających trudności wraz ze zmianą schematów i sposobów reagowania na te bardziej wspierające sposoby funkcjonowania."
        className="md:order-4 lg:order-4 bg-card-two"
      />
      
      {/* Image3 */}
      <ImageCard
        url="card-water.png"
        alt="photo of water surface with sun reflections on waves"
        className="md:order-6 lg:order-5"
      />
      
      {/* Service3 */}
      <ServiceCard
        number="3"
        title="MENTORING"
        description="W ramach mentoringu pracujemy nad konkretnymi celami, wzmocnieniem zasobów i tworzeniu nowych nawyków. Jeśli czujesz, że niekoniecznie szukasz terapii, ale chcesz bardziej świadomie kształtować swoje życie i decyzje."
        className="md:order-5 lg:order-6 bg-card-three"
      />
    </div>
  </Section>
);

export default ServicesSection;