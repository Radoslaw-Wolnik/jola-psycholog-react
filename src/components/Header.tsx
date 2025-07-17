import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Instagram } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);


  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { name: 'O MNIE', id: 'about' },
    { name: 'OFERTA', id: 'services' },
    { name: 'PRAKTYKA', id: 'practice' },
    { name: 'GABINET', id: 'office' },
    { name: 'KONTAKT', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex md:justify-between items-center py-2">
          {/* Left: Logo and Text */}
          
          <div className="flex flex-row gap-3 self-start items-end">
            {/* logo + title */}
            <img src="logo-no-bg.png" alt="W Relacji logo" className={`h-8 md:h-16`} />
            <div className="hidden min-[970px]:flex flex-col text-center">
              <h2 className={`text-black-p text-sm font-logo`}>
                JOLANTA DOMINIAK-KONDERAK
              </h2>
              <p className={`text-black-p/90 text-sm`}>
                PSYCHOLOG
              </p>
            </div>
          </div>
          
          {/* Right: Desktop Navigation - HORIZONTAL LAYOUT */}
          <nav className="justify-end">
            <ul className="flex flex-row flex-nowrap justify-end list-none gap-4 m-0 items-center">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-dark hover:text-text-hover-accent transition-colors font-text text-md whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {/* socials + contact */}
              <li>
                <a
                  href="mailto:kontakt@wrelacji.com"
                  className="hover:text-text-hover-accent transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+48690328246"
                  className="hover:text-text-hover-accent transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                href="https://instagram.com/jolanta_psychology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-hover-accent transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                </a>
              </li>
            </ul>
          </nav>

        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex flex-row items-center xsm:gap-4" >
            <img 
              src="logo-no-bg.png" 
              alt="W Realcji logo"
              className="h-auto w-auto max-w-[160px]" // Adjust height as needed
            />
            <div className="hidden min-[560px]:flex flex-col text-center">
              <h2 className="text-black-p text-xs xsm:text-xs  font-logo">
                JOLANTA DOMINIAK-KONDERAK
              </h2>
              <p className="text-black-p/90 text-xs xsm:text-xs ">
                PSYCHOLOG
              </p>
            </div>
          </div>

          {/* socials + contact */}
          <nav className="justify-end">
            <ul className="flex flex-row flex-nowrap justify-end list-none gap-4 m-0 items-center">
              <li>
                <a
                  href="mailto:kontakt@wrelacji.com"
                  className="hover:text-text-hover-accent transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+48690328246"
                  className="hover:text-text-hover-accent transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                </a>
              </li>
              <li>
                <a
                href="https://instagram.com/jolanta_psychology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-hover-accent transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                </a>
              </li>
            
          
          
          {/* Right: Hamburger Menu */}
          <button 
            className="text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 transform transition-all origin-top duration-300 ease-in-out ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        <nav className="py-4">
          <ul className="px-4 gap-2 flex flex-col items-center">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-dark hover:text-text-hover-accent transition-colors font-medium py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;