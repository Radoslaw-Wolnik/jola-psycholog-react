// import Section from './Section.tsx';

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
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#3B200F] mb-10">
        <span className="inline-block">
          <span className="mx-1">✦</span> OBSZARY POMOCY: <span className="mx-1">✦</span>
        </span>
      </h2>
      <div className="flex flex-col items-center">
        <div className="inline-flex flex-col min-w-[10px] max-w-full">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-400 px-6 py-10 rounded-md text-lg hover:bg-neutral-100 transition mb-4 last:mb-0 text-center break-words"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
);

export default HelpSection;
