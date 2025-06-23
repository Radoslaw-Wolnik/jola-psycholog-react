// src/components/OfficeSection.tsx
import Section from './Section.tsx';

const OfficeSection = () => (
  <Section id="office" title="GABINET">
    <div className="prose prose-lg max-w-none text-dark">
      <p>
        Zapraszam Cię do mojego wirtualnego gabinetu. Prowadzę konsultacje i terapie 
        psychologiczną online dla osób dorosłych. Sesje odbywają się za pośrednictwem 
        platform do wideorozmów Zoom i GoogleMeets.
      </p>
      
      <div className="bg-light rounded-xl p-6 my-8 border-l-4 border-accent">
        <p className="font-bold text-lg">
          <span className="text-accent">Koszt jednej sesji:</span> 150 zł
        </p>
        <p>
          <span className="text-accent">Czas trwania:</span> 50 minut
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-bold text-secondary mb-3">INTERNET</h3>
          <p>Aby nasze spotkania były możliwe potrzebujesz dobre połączenie internetowe.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-secondary mb-3">URZĄDZENIE</h3>
          <p>Możesz się połączyć z dowolnego urządzenia. Sprawdź swoją kamerę oraz słuchawki żebyśmy się mogli widzieć i słyszeć.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-secondary mb-3">PRZESTRZEŃ</h3>
          <p>Zadbaj o prywatną przestrzeń bez dystraktorów, by czuć się swobodnie z kubkiem herbaty czy kawy.</p>
        </div>
      </div>
    </div>
  </Section>
);

export default OfficeSection;