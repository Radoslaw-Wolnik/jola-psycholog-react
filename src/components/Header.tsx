import { useState, useEffect, useRef } from 'react';

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
    { name: 'OBSZARY POMOCY', id: 'help' },
    { name: 'GABINET', id: 'office' },
    { name: 'KONTAKT', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center py-4">
          {/* Left: Logo and Text */}
          <div className="flex flex-row items-center gap-4" >
            <img 
              src="logo_only_horisontal.png" 
              alt="W Realcji"
              className="h-auto w-auto max-w-[160px]" // Adjust height as needed
            />
            <img 
              src="jolanta.png" 
              alt="Jolanta Dominiak-Konderak"
              className="h-auto w-auto max-w-[160px]" // Adjust height as needed
            />
          </div>
          
          {/* Right: Desktop Navigation - HORIZONTAL LAYOUT */}
          <nav>
            <ul className="flex flex-row flex-nowrap justify-end list-none p-0 m-0">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-dark hover:text-text-hover-accent transition-colors font-medium text-sm whitespace-nowrap px-2"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center py-4">
          {/* Left: Logo */}
          <div className="flex flex-row items-center gap-4" >
            <img 
              src="logo_only_horisontal.png" 
              alt="W Realcji"
              className="h-auto w-auto max-w-[160px]" // Adjust height as needed
            />
            <img 
              src="jolanta.png" 
              alt="Jolanta Dominiak-Konderak"
              className="h-auto w-auto max-w-[160px]" // Adjust height as needed
            />
          </div>
          
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