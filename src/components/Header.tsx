import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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
          <div className="flex flex-col">
            <div className="text-xl font-bold text-secondary flex items-center">
              <div className="mr-2">W RELACJI</div>
              <span className="text-sm font-normal text-dark ml-2 border-l border-gray-300 pl-2">
                Jolanta Dminiak-Konderak
              </span>
            </div>
            <div className="text-xl text-gray-500 mt-1">psycholog</div>
          </div>
          
          {/* Right: Desktop Navigation - HORIZONTAL LAYOUT */}
          <nav>
            <ul className="flex flex-row flex-nowrap justify-end list-none p-0 m-0">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-dark hover:text-primary transition-colors font-medium text-sm whitespace-nowrap px-2"
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
          <div className="text-xl font-bold text-secondary">RELACJI</div>
          
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
      
      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div 
          className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 overflow-y-auto"
          style={{ maxHeight: '30vh' }}
        >
          <nav className="py-4 ">
            <ul className="px-4 gap-2 flex flex-col items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="block text-dark hover:text-primary transition-colors font-medium py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;