import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '../constants/constant';
const Contact = () => {


  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haz tu reserva o consulta con nosotros, será un placer atenderte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {info.icon}
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">
                      {info.title}
                    </h3>
                  </div>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Síguenos en Redes Sociales
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Encuéntranos aquí
            </h3>
            <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Ubicación Restaurante Rincón Nanegalense"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3550942056885!2d-3.6461438!3d40.4287365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f4240931869%3A0xd19a96790513e33f!2sRestaurante%20Rinc%C3%B3n%20Nanegalense!5e0!3m2!1ses!2ses!4v1713351700056!5m2!1ses!2ses"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;