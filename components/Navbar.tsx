
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'glass border-b border-black/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center">
             <div className={`absolute inset-0 rounded-full border-[1.5px] transition-colors duration-500 ${scrolled ? 'border-blue-600' : 'border-black/20'}`}></div>
             <div className="flex items-center font-black text-lg tracking-tighter">
                <span className={`transition-colors duration-500 ${scrolled ? 'text-black' : 'text-black'}`}>M</span>
                <span className={`transition-colors duration-500 mx-[1px] ${scrolled ? 'text-blue-600' : 'text-blue-600'}`}>T</span>
                <span className={`transition-colors duration-500 ${scrolled ? 'text-black' : 'text-black'}`}>E</span>
             </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-sm tracking-tight transition-colors duration-500 text-black`}>
              MODERN ENGINE PROS
            </span>
            <span className={`text-[8px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? 'text-blue-600' : 'text-black/40'}`}>
              EST. 1979
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[12px] font-medium tracking-wide transition-all opacity-70 hover:opacity-100 text-black`}
            >
              {link.name}
            </a>
          ))}
          <div className={`h-4 w-px bg-black/10`}></div>
          <a
            href="https://CylinderHeadStore.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[12px] font-semibold px-4 py-1.5 rounded-full transition-all active:scale-95 bg-blue-600 text-white hover:bg-blue-700`}
          >
            Visit Store
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
             <span className={`h-[1.5px] w-full bg-black transition-all`}></span>
             <span className={`h-[1.5px] w-full bg-black transition-all`}></span>
             <span className={`h-[1.5px] w-full bg-black transition-all`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[101] bg-white transition-all duration-500 flex flex-col px-10 pt-32 space-y-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4">
           <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-4xl font-semibold text-black tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <hr className="border-black/5" />
        <div className="grid grid-cols-1 gap-4">
          <a href="https://CylinderHeadStore.com" className="bg-blue-600 text-white py-4 rounded-xl font-bold text-center">Cylinder Head Store</a>
          <a href="https://MEParts.com" className="bg-[#f5f5f7] text-black py-4 rounded-xl font-bold text-center">Engine Parts Store</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
