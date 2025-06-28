interface LogoComponentProps {
  size: number;
}

const LogoComponent = ({size}: LogoComponentProps) => {
  let textSize = 'sm';
  if (size === 2) textSize = 'lg';
  else if (size === 3) textSize = '2xl';
  return (
    <div className="flex flex-row gap-3 self-start items-end">
        {/* logo + title */}
        <img src="logo-no-bg.png" alt="W Relacji logo" className={`h-${size*8} md:h-${size*16}`} />
        <div className="text-center">
          <h2 className={`text-black-p text-${textSize} font-logo`}>
            JOLANTA DOMINIAK-KONDERAK
          </h2>
          <p className={`text-black-p/90 text-${textSize}`}>
            PSYCHOLOG
          </p>
        </div>
    </div>
  );
};


export default LogoComponent;
