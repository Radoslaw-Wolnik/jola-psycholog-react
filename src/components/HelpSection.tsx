import Section from './Section.tsx';

const helpItems = [
  'Nasilony lęk i stres',
  'Obniżony nastrój, stany depresyjne',
  'Kryzysy życiowe',
  'Trauma',
  'Rozwój osobisty',
  'Problemy w relacjach',
  'Cokolwiek trudnego dla Ciebie',
];

const HelpSection = () => (
  <Section id="help" title="OBSZARY POMOCY" bgClassName="bg-gradient-top-fade">
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex flex-col items-center">
        <div className="inline-flex flex-col min-w-[250px] max-w-full">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="font-text text-black-p border-1 border-black px-12 py-1 rounded-sm text-lg hover:shadow-lg transition-shadow mb-4 last:mb-0 text-center break-words"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default HelpSection;
