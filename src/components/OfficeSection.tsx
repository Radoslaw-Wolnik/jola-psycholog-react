// src/components/OfficeSection.tsx
import clsx from 'clsx';
import Section from './Section.tsx';

interface OfficeCardProps {
  title: string;
  description: string;
  className?: string;
}
const OfficeCard = ({ 
  title, 
  description,
  className,
}: OfficeCardProps) => (
  <div
    className={clsx(
      'bg-background-accent rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center',
      className,
    )}
  >
    <h3 className="text-xl font-header2 text-black-p mb-3">{title}</h3>
    <p className="text-dark">{description}</p>
  </div>
);

const OfficeSection = () => (
  <Section id="office" title="GABINET" bgClassName="bg-gradient-to-contact">
    <div className="prose prose-lg max-w-none text-dark">

      <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 gap-8 mt-12 items-center">
        {/* 1. Intro text */}
        <div className="xsm:col-span-2 sm:col-span-2">
          <p>
            Zapraszam Cię do mojego wirtualnego gabinetu. Prowadzę konsultacje i terapie 
            psychologiczną online dla osób dorosłych. Sesje odbywają się za pośrednictwem 
            platform do wideorozmów Zoom i GoogleMeets.
          </p>
        </div>

        {/* Price box */}
        <div>    
          <div className="bg-light rounded-xl p-6 border-l-4 border-accent">
            <p className="font-bold text-lg mb-2">
              <span className="text-accent">Koszt jednej sesji:</span> 150 zł
            </p>
            <p>
              <span className="text-accent">Czas trwania:</span> 50 minut
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="jola_pracuje.jpg"
            alt="Zdjęcie Joli w pracy"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-3 gap-8 mt-12 text-center">
        <OfficeCard
          title = "INTERNET"
          description= "Aby nasze spotkania były możliwe potrzebujesz dobre połączenie internetowe."
        />
        
        <OfficeCard
          title = "URZĄDZENIE" 
          description= "Możesz się połączyć z dowolnego urządzenia. Sprawdź swoją kamerę oraz słuchawki żebyśmy się mogli widzieć i słyszeć."
        />
        
        <OfficeCard
          title = "PRZESTRZEŃ"
          description="Zadbaj o prywatną przestrzeń bez dystraktorów, by czuć się swobodnie z kubkiem herbaty czy kawy."
        />

      </div>
    </div>
  </Section>
);

export default OfficeSection;