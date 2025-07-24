import clsx from 'clsx';
import Section from './Section.tsx';


interface HelpCardProps {
  title: string;
  description: string;
  className?: string;
}
const HelpCard = ({ 
  title, 
  description,
  className,
}: HelpCardProps) => (
  <div
    className={clsx(
      'bg-[#F5F5F5] rounded-xl p-6 md:p-10 shadow-md hover:shadow-lg transition-shadow text-center',
      className,
    )}
  >
    <h3 className="text-2xl lg:text-3xl font-header2 text-black-p md:mb-3">{title}</h3>
    <p className="text-dark text-lg md:text-xl">{description}</p>
  </div>
);

const HelpSection = () => (
  <Section id="help" title="OBSZARY POMOCY" className="overflow-hidden" bgImageUrl="bg_help_section.png" > {/*--bgClassName="bg-gradient-top-fade" */}
        <div className="grid xsm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 text-center">
        <HelpCard
          title = "Stres i napięcie "
          description= "Przewlekły stres, napięcie emocjonalne, objawy psychosomatyczne, presja dnia codziennego, ból napięciowy, zmęczenie, wpływ choroby autoimmunologicznej, choroba przewlekła. "
        />
        
        <HelpCard
          title = "Zdrowie psychiczne " 
          description= "Wspieram osoby zmagające się z depresją, lękiem, wypaleniem zawodowym, atakami paniki, bezsennością, zaburzeniami odżywiania, problemami z kontrolą impulsów, traumą."
        />
        
        <HelpCard
          title = "Kryzys życiowy"
          description="Trudne momenty życia - rozstanie, rozwód, żałoba, doświadczenie przemocy utrata zmiana pracy, choroba własna i członka rodziny, trudności okołoporodowe, kryzys tożsamości i egzystencji. "
        />

        <HelpCard
          title = "Związki i relacje "
          description="Zrozumienie wzorców relacji, style przywiązania, relacje w systemie rodzinnym, konflikty i częste kłótnie w związku, utrata zaufania, uwikłanie w relacji, milczenie, agresja, lęk przed odrzuceniem, które Cie przytłaczają. "
        />
        
        <HelpCard
          title = "Relacja ze sobą"
          description="Trudności z odczuwaniem własnych emocji, niska samoocena, brak wiary w siebie, samokrytycyzm, brak kontaktu z własnymi potrzebami, perfekcjonizm, prokrastynacja, wstyd, poczucie winy, kryzys roli życiowej."
        />

        <HelpCard
          title = "Rozwój osobisty"
          description="Dla tych, którzy chcą lepiej poznać siebie, odkrywać swój potencjał, budować wewnętrzną spójność, zmienić nawyki, poznać wartości, rozwinąć asertywność wewnętrzną i poczucia samostanowienia. "
        />

      </div>
  </Section>
);

export default HelpSection;
