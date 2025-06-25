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
  <Section id="help" title="OBSZARY POMOCY" bgClassName="bg-light">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#3B200F] mb-10">
      </h2>
      <div className="flex flex-col items-center">
        <div className="inline-flex flex-col min-w-[250px] max-w-full">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="border-1 border-black px-12 py-1 rounded-sm text-lg hover:bg-neutral-100 transition mb-4 last:mb-0 text-center break-words"
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
