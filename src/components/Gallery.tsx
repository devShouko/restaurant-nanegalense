import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "/assets/menu/guatita.jpg",
      alt: "Guatita"
    },
    {
      src: "/assets/menu/ceviche_mixto.jpg",
      alt: "Ceviche Mixto"
    },
    {
      src: "/assets/menu/chaulafan.jpg",
      alt: "Chaulafán"
    },
    {
      src: "/assets/menu/hornado.jpg",
      alt: "Hornado"
    },
    {
      src: "/assets/menu/sopa_marinera.jpg",
      alt: "Sopa marinera"
    },
    {
      src: "/assets/menu/arroz_con_camaron.jpg",
      alt: "Arroz con camarón"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un vistazo a nuestros platos exquisitos y el ambiente único de Bar Rincón Nanegalense
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold mb-2">{image.alt}</div>
                  <div className="w-12 h-0.5 bg-orange-400 mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;