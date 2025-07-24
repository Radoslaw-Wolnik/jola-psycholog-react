// src/components/AboutSection.tsx
import Section from './Section.tsx';

const AboutSection = () => (
  <Section id="about" title="O MNIE" bgClassName="bg-gradient-bottom-fade">

    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 [@media(min-width:880px)]:grid-cols-3 gap-6 w-auto">

      {/* Image - with proper dimensions */}
      <div className="block xsm:relative overflow-hidden h-full">
        <div className="inline-flex justify-center xsm:absolute xsm:inset-0">
          <img 
            src="jola_portret_round_corners.png" 
            alt="Zdjęcie Joli na fotelu"
            className="w-2/3 xsm:w-auto xsm:h-full object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* Heading */}
      <div className="text-center md:text-left flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-header2 text-black-p text-center">
          Nazywam się Jolanta Dominiak-Konderak<br /> jestem psycholożką
        </h1>
        <div className="pt-2"></div>
        <blockquote className="italic text-xl text-center md:text-left mb-4 text-dark font-text ">
          „Wierzę, że każdy z Nas ma w sobie zasoby, by odnaleźć drogę do własnego 
          dobrostanu. Moją rolą jest towarzyszenie Ci w tej podróży - bez oceniania, 
          z pełną akceptacją i uważnością na to, kim jesteś.”
        </blockquote>
      </div>

      {/* Main text */}
      <div className="prose max-w-none text-dark xsm:col-span-2 md:col-span-2 [@media(min-width:880px)]:col-span-1 font-text text-lg md:text-xl ">
        <p>
          Jestem psycholożką, absolwentką psychologii Uniwersytetu Opolskiego 
          o specjalności klinicznej człowieka dorosłego. W toku studiów oraz dalszej 
          edukacji zdobyłam wymagane kompetencje do pracy w obszarze pomocy oraz 
          diagnozy psychologicznej.
        </p>
        <div className="pt-4"></div>
        <p className=''>
          Ukończyłam także kurs Racjonalnej Terapii Zachowania oraz Interwencji 
          Kryzysowej, co pozwala mi prowadzić interwencje dla osób w trudnych 
          momentach życiowych. Towarzyszyłam również pacjentom z doświadczeniem 
          choroby onkologicznej, wspierając ich w momencie kryzysu.
        </p>
      </div>
    </div>
  </Section>
);

export default AboutSection;