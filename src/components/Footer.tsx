import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_NAME, RESTAURANT_PHONE, RESTAURANT_LOCATION, RESTAURANT_ADDRESS, RESTAURANT_EMAIL, RESTAURANT_DESCRIPTION } from '../constants/constant';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-orange-400 mb-4">
              {RESTAURANT_NAME}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {RESTAURANT_DESCRIPTION}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Menú
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">{RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">{RESTAURANT_PHONE}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">{RESTAURANT_EMAIL}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Bar Rincón Nanegalense. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Uso de Cookies
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;