import React from 'react';
import { Award, Users, Clock, Heart, BookUser } from 'lucide-react';
import { Utensils } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Utensils className="text-orange-400" size={40} />,
      title: "Sabores del Ecuador",
      description: "Una experiencia auténtica con lo mejor de la gastronomía ecuatoriana"
    },
    {
      icon: <BookUser className="text-orange-400" size={40} />,
      title: "Equipo Apasionado",
      description: "Chefs y personal que comparten el amor por la cocina de nuestra tierra."
    },
    {
      icon: <Clock className="text-orange-400" size={40} />,
      title: "Tradición",
      description: "Más de 20 años llevando a la mesa recetas de la sierra y la costa ecuatoriana"
    },
    {
      icon: <Heart className="text-orange-400" size={40} />,
      title: "Pasión",
      description: "Cada plato ecuatoriano se prepara con dedicación y el sabor de casa."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            En el corazón de Madrid, el "Bar Rincón Nanegalense" ofrece los auténticos sabores de la gastronomía ecuatoriana casera. Cada plato es una celebración de tradición, amor y cuidado, pensado para transportarte a los cálidos paisajes de Ecuador con su aroma y sabor único.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro restaurante está diseñado para recibir a personas de todas las edades, ofreciendo recetas accesibles y el ambiente perfecto para disfrutar en familia.
            </p>
            
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/assets/historia.jpg"
              alt="Chef preparando comida"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;