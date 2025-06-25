// src/components/AboutSection.tsx
import Section from './Section.tsx';

const AboutSection = () => (
  <Section id="about" title="O MNIE" bgClassName="bg-background-main">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center w-auto">
      {/* Image */}
      <div className="flex justify-center md:justify-start">
        <img 
          src="jola_portret.jpg" 
          alt="Zdjęcie Joli na fotelu"
          className="w-2/3  sm:w-auto h-auto rounded-2xl" 
        />
      </div>

      {/* Heading */}
      <div className="text-center md:text-left flex flex-col justify-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary">
          Nazywam się Jolanta Dominiak-Konderak<br /> jestem psycholożką
        </h1>
        <blockquote className="italic text-lg text-center md:text-left mb-4 text-dark font-text">
          "Wierzę, że każdy z Nas ma w sobie zasoby, by odnaleźć drogę do własnego 
          dobrostanu. Moją rolą jest towarzyszenie Ci w tej podróży – bez oceniania, 
          z pełną akceptacją i uważnością na to, kim jesteś."
        </blockquote>
      </div>

      {/* Main text */}
      <div className="prose prose-lg max-w-none text-dark sm:col-span-2 md:col-span-1 font-text">
        <p>
          Jestem psycholożką, absolwentką psychologii Uniwersytetu Opolskiego 
          o specjalności klinicznej człowieka dorosłego. W toku studiów oraz dalszej 
          edukacji zdobyłam wymagane kompetencje do pracy w obszarze pomocy oraz 
          diagnozy psychologicznej.
        </p>
        <p>
          Ukończyłam także kurs Racjonalnej Terapii Zachowania oraz Interwencji 
          Kryzysowej, co pozwala mi prowadzić interwencje dla osób w trudnych 
          momentach życiowych. Towarzyszyłam również pacjentom z doświadczeniem 
          choroby onkologicznej, wspierając ich w momencie kryzysu. Ponadto, 
          pracuję w Centrum Zdrowia Psychicznego w Knurowie.
        </p>
      </div>
    </div>
  </Section>
);

export default AboutSection;