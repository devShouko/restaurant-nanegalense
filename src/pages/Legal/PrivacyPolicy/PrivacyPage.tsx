import { RESTAURANT_NAME, RESTAURANT_PHONE, RESTAURANT_LOCATION, RESTAURANT_ADDRESS, RESTAURANT_EMAIL } from '@constants/constant';



const PrivacyPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      
      <p className="text-sm text-gray-600 mb-6">
        Última actualización: {lastUpdated}
      </p>

      <p className="mb-6">
        En cumplimiento con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección 
        de Datos Personales y garantía de los derechos digitales (LOPD-GDD) y el 
        Reglamento General de Protección de Datos (RGPD), te informamos sobre el 
        tratamiento de tus datos personales.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Responsable del tratamiento</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="mb-2"><strong>Razón social:</strong> {RESTAURANT_NAME}</p>
        <p className="mb-2"><strong>Dirección:</strong> {RESTAURANT_ADDRESS}</p>
        <p className="mb-2"><strong>Email:</strong> {RESTAURANT_EMAIL}</p>
        <p><strong>Teléfono:</strong> {RESTAURANT_PHONE}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Datos que recopilamos</h2>
      <p className="mb-4">Podemos recopilar los siguientes tipos de datos personales:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Datos de contacto:</strong> nombre, apellidos, email, teléfono</li>
        <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas</li>
        <li><strong>Datos técnicos:</strong> cookies, dispositivo utilizado, sistema operativo</li>
        <li><strong>Datos del formulario de contacto:</strong> mensaje, consultas realizadas</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Finalidades del tratamiento</h2>
      <p className="mb-4">Tratamos tus datos personales para las siguientes finalidades:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Responder a tus consultas y solicitudes de información</li>
        <li>Gestionar y mantener el funcionamiento del sitio web</li>
        <li>Realizar análisis estadísticos sobre el uso del sitio web (con tu consentimiento)</li>
        <li>Cumplir con las obligaciones legales aplicables</li>
        <li>Mejorar nuestros servicios y la experiencia del usuario</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Base legal</h2>
      <p className="mb-4">El tratamiento de tus datos se basa en:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Consentimiento:</strong> para cookies analíticas y comunicaciones comerciales</li>
        <li><strong>Ejecución de un contrato:</strong> para la prestación de servicios solicitados</li>
        <li><strong>Interés legítimo:</strong> para el funcionamiento técnico del sitio web</li>
        <li><strong>Cumplimiento legal:</strong> para cumplir con obligaciones normativas</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Conservación de datos</h2>
      <p className="mb-6">
        Conservaremos tus datos personales durante el tiempo necesario para cumplir 
        con las finalidades para las que fueron recogidos y para cumplir con las 
        obligaciones legales. Los datos de contacto se conservarán mientras mantengas 
        relación con nosotros y posteriormente durante el tiempo que establezca la 
        legislación aplicable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Destinatarios de los datos</h2>
      <p className="mb-4">Tus datos personales pueden ser comunicados a:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Proveedores de servicios tecnológicos (hosting, análisis web)</li>
        <li>Autoridades públicas cuando sea requerido por ley</li>
        <li>Google Analytics (si has dado tu consentimiento para cookies analíticas)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Transferencias internacionales</h2>
      <p className="mb-6">
        Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del 
        Espacio Económico Europeo. En estos casos, nos aseguramos de que existan 
        garantías adecuadas para la protección de tus datos personales conforme al RGPD.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Tus derechos</h2>
      <p className="mb-4">Como titular de los datos, tienes derecho a:</p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
        <li><strong>Limitación:</strong> restringir el tratamiento de tus datos</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
        <li><strong>Retirar consentimiento:</strong> cuando el tratamiento se base en consentimiento</li>
      </ul>
      <p className="mb-6">
        Para ejercer estos derechos, contacta con nosotros en: info@tusitio.com
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Seguridad de los datos</h2>
      <p className="mb-6">
        Implementamos medidas técnicas y organizativas apropiadas para proteger tus 
        datos personales contra el acceso no autorizado, la alteración, divulgación 
        o destrucción no autorizada.
      </p>
     
      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Modificaciones</h2>
      <p className="mb-6">
        Nos reservamos el derecho a modificar esta Política de Privacidad. 
        Cualquier cambio será publicado en esta página con la fecha de actualización 
        correspondiente.
      </p>
    
      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contacto</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="mb-4">
          Para cualquier consulta sobre esta Política de Privacidad o sobre el 
          tratamiento de tus datos personales:
        </p>
        <p className="mb-2"><strong>Email:</strong> {RESTAURANT_EMAIL}</p>
        <p className="mb-2"><strong>Teléfono:</strong> {RESTAURANT_PHONE}</p>
        <p><strong>Dirección:</strong> {RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;