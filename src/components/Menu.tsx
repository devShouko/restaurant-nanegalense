import React from 'react';
import { MENU_DEL_DIA_DESCRIPTION, MENU_DEL_DIA_NAME, MENU_DEL_DIA } from '../constants/constant';

const Menu = () => {
  

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {MENU_DEL_DIA_NAME}
          </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {MENU_DEL_DIA_DESCRIPTION}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {MENU_DEL_DIA.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-center mb-8 text-orange-600 border-b-2 border-orange-400 pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-orange-600">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Ver Carta Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;