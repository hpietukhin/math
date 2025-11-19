import React, { useState } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-2 border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-blue-500 text-white p-2 rounded-lg border-2 border-black shadow-sketch group-hover:shadow-sketch-hover transition-all">
              <Calculator size={24} />
            </div>
            <span className="font-heading text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              Math<span className="text-blue-500">Whiz</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-hand text-xl text-slate-700 hover:text-blue-600 relative group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full opacity-60 rounded-full"></span>
              </a>
            ))}
            <a href="#contact" className="ml-4">
                <button className="font-hand text-lg px-4 py-1 bg-yellow-300 border-2 border-black rounded-md shadow-sketch hover:-translate-y-0.5 hover:shadow-sketch-lg transition-all">
                    Book Now
                </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b-2 border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-xl font-hand font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
                <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center font-hand text-xl px-4 py-3 bg-yellow-300 border-2 border-black rounded-md shadow-sketch">
                    Book a Session
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;