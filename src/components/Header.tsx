import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_NAME, RESTAURANT_PHONE, RESTAURANT_LOCATION } from '../constants/constant';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-black/95 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-orange-500">
            {RESTAURANT_NAME}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">{RESTAURANT_PHONE}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-sm">{RESTAURANT_LOCATION}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-col space-y-2 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>{RESTAURANT_PHONE}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{RESTAURANT_LOCATION}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;