// src/components/AboutSection.tsx
import Section from './Section.tsx';

const AboutSection = () => (
  <Section id="about" title="O MNIE">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-secondary mb-4">
        Jolanta Dominiak-Konderak
      </h1>
      <p className="text-xl text-accent font-semibold">psycholożka</p>
    </div>

    <blockquote className="italic text-lg text-center mb-8 text-dark max-w-2xl mx-auto">
      "Wierzę, że każdy z Nas ma w sobie zasoby, by odnaleźć drogę do własnego 
      dobrostanu. Moją rolą jest towarzyszenie Ci w tej podróży – bez oceniania, 
      z pełną akceptacją i uważnością na to, kim jesteś."
    </blockquote>

    <div className="prose prose-lg max-w-none text-dark">
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
  </Section>
);

export default AboutSection;