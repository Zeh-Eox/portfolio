import { useState, useEffect } from 'react';
// import { HEADER_ITEMS } from '.';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [activeItem, setActiveItem] = useState(1);
  // const [menuOpen, setMenuOpen] = useState(false);

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header 
        className={`py-4 px-6 md:px-10 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          {/* <div className="flex items-center">
            <div className="text-xl text-white md:text-2xl font-bold">
              Arnold <span className="text-blue-600 font-extrabold">STACK</span>
            </div>
          </div> */}

          {/* Menu desktop
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {HEADER_ITEMS.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.path}
                    className={`relative py-2 px-1 font-medium transition-colors duration-300 
                      ${activeItem === item.id 
                        ? 'text-blue-600' 
                        : 'text-white hover:text-blue-600'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(item.id);
                    }}
                  >
                    {item.name}
                    {activeItem === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav> */}

          {/* Bouton contact (visible uniquement sur desktop) */}
          {/* <div className="">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Contact
            </button>
          </div> */}

          {/* Menu burger (mobile)
          <button 
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button> */}
        </div>
      </header>

      {/* Menu mobile */}
      {/* <div 
        className={`md:hidden absolute w-full bg-transparent backdrop-blur-md shadow-lg transition-all duration-300 ${
          menuOpen ? 'min-h-100 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4">
            {HEADER_ITEMS.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.path}
                  className={`block py-2 px-1 font-medium transition-colors duration-300 ${
                    activeItem === item.id ? 'text-blue-600' : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  );
};

export default Header;