import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { RESTAURANT_NAME } from '../constants/constant';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/assets/fondo.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
       
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {RESTAURANT_NAME}
        </h1>
        
  
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Ver Menú
              <ArrowRight className="ml-2" size={20} />
            </button>
            </a>

        </div>
      </div>

  
    </section>
  );
};

export default Hero;