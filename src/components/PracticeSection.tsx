// src/components/PracticeSection.tsx
import Section from './Section.tsx';

const PracticeSection = () => (
  <Section id="practice" title="PRAKTYKA" bgClassName="bg-gradient-bottom-fade">
    <div className="prose text-lg md:text-xl max-w-none text-dark flex flex-col gap-4">
      <p>
        Bazą jest bezpieczna relacja terapeutyczna.
      </p>
      
      <p className=''>
        Pracuję w atmosferze zaufania i autentyczności, tworząc przestrzeń, w której 
        możesz być sobą. W trakcie spotkań skupimy się na tym, co dzieje się w Twoim 
        życiu tu i teraz - zarówno w umyśle, jak i w ciele. Dzięki temu masz szansę 
        przyjrzeć się swoim emocjom, przekonaniom i relacjom w nowym świetle, rozpoznać, 
        co Cię wspiera a co ogranicza. Nie analizujemy wyłącznie przeszłości, lecz 
        badamy, jak wpływa ona na Twoje obecne wybory i sposób przeżywania rzeczywistości.
      </p>
      
      <p className="">
        Jestem pełna ciekawości, jak przeszłe doświadczenia ukształtowały Ciebie i jak 
        możemy wspólnie nadać im kierunek, by stały się źródłem wzrostu oraz siły. 
        Wspólnie pracujemy na tym co dla Ciebie trudne, jak również wzmacniamy to co 
        stwarza Cię wyjątkowym. W prowadzonych przeze mnie procesach wsparcia koncentruję 
        się na czuciu, emocjach, doświadczaniu, bazując na solidnej wiedzy z dziedziny 
        psychologii i neurobiologii.
      </p>
      
      <p>
        Inspiruję się terapią w nurtach humanistyczno-doświadczeniowych. Wykorzystuję 
        techniki z terapii Akceptacji i Zaangażowania (ACT), Racjonalnej Terapii 
        Zachowania (RTZ), pracy z ciałem, terapii Gestalt, integrując doświadczenie 
        klienta w drodze do odzyskania harmonii psychofizycznej.
      </p>
      
      <p className="">
        Swoją pracę poddaje stałej superwizji. Kieruję się Kodeksem Etyczno-Zawodowym Psychologa.
      </p>
    </div>
  </Section>
);

export default PracticeSection;