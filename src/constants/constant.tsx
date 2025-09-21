import { Clock, Mail, MapPin, Phone } from "lucide-react";

// Site Configuration

export const SITE_NAME = "Rincón Nanegalense";
export const SITE_URL = "https://rincon.nanegalense.com";
export const SITE_DATE_REVISION = "21 de septiembre de 2025";
// Restaurant Info
export const RESTAURANT_NAME = "Bar Rincón Nanegalense";
export const RESTAURANT_ADDRESS = "Calle Solana 74";
export const RESTAURANT_PHONE = "+34 912 334 349";
export const RESTAURANT_LOCATION = "Madrid, España";
export const CURRENCY = "EUR";
export const RESTAURANT_EMAIL = "info@rincon.nanegalense.com";
export const RESTAURANT_RESERVATIONS_EMAIL = "reservas@rincon.nanegalense.com";
export const RESTAURANT_DESCRIPTION = "En el corazón de Madrid, el Bar Rincón Nanegalense ofrece auténtica comida casera ecuatoriana, con platos que transmiten tradición y sabor en un ambiente familiar y acogedor";

// Menu del dia
export const MENU_DEL_DIA_NAME = "Menú del día";
export const MENU_DEL_DIA_PRICE = "12.50€"; // Precio fijo por persona
export const MENU_DEL_DIA_DESCRIPTION =  "El menú del día combina recetas ecuatorianas tradicionales con toques modernos, ofreciendo entrantes, principales y postres frescos y de calidad.";
          
export const MENU_DEL_DIA = [
  {
    title: "Entrantes",
    items: [
      {
        name: "Caldo de pata",
        description: "Sopa tradicional con res, mote y vegetales.",
      },
      {
        name: "Encebollado",
        description: "Caldo ecuatoriano con pescado, yuca y cebolla.",
      },
    ],
  },
  {
    title: "Platos Principales",
    items: [
      {
        name: "Chaulafán",
        description: "Arroz salteado con carnes, camarones y verduras.",
      },
      {
        name: "Corvina",
        description: "Pescado fresco sazonado y cocinado a la perfección.",
      },
      {
        name: "Menestra con Chuleta",
        description: "Menestra de legumbres con arroz, chuleta y maduro.",
      },
      {
        name: "Seco de Carne",
        description: "Carne guisada con arroz y maduros fritos.",
      },
    ],
  },
  {
    title: "Bebidas y Postres",
    items: [
      {
        name: "Gaseosas",
        description: "Refresco con gas.",
      },
      {
        name: "Jugo del día",
        description: "Jugo natural de temporada.",
      },
      {
        name: "Gelatina",
        description: "Postre ligero de sabores.",
      },
      {
        name: "Flan",
        description: "Postre suave con caramelo.",
      },
      {
        name: "Helado",
        description: "Chocolate, vainilla o fresa.",
      },
    ],
  },
];

// Contact Info

export const contactInfo = [
    {
      icon: <MapPin className="text-orange-400" size={24} />,
      title: "Dirección",
      details: [RESTAURANT_ADDRESS, RESTAURANT_LOCATION]
    },
    {
      icon: <Phone className="text-orange-400" size={24} />,
      title: "Teléfono",
      details: [RESTAURANT_PHONE]
    },
    {
      icon: <Mail className="text-orange-400" size={24} />,
      title: "Email",
      details: [RESTAURANT_EMAIL, RESTAURANT_RESERVATIONS_EMAIL]
    },
    {
      icon: <Clock className="text-orange-400" size={24} />,
      title: "Horarios",
      details: ["Lun-Jue: 11:00 - 22:30", "Vi: 10:00 - 24:00", "Sáb: 10:00 - 00:30", "Dom: 10:00 - 23:00"]
    }
  ];

