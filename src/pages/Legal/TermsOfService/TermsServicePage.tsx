import { RESTAURANT_NAME, RESTAURANT_PHONE, RESTAURANT_LOCATION, RESTAURANT_ADDRESS, RESTAURANT_EMAIL } from '@constants/constant';


const TermsOfServicePage = () => {
  const lastUpdated = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Términos de Servicio</h1>
      
      <p className="text-sm text-gray-600 mb-6">
        Última actualización: {lastUpdated}
      </p>

      <p className="mb-6">
        Los presentes Términos de Servicio regulan el uso del sitio web 
        [www.tusitio.com] (en adelante, "el Sitio Web"), propiedad de 
        [Nombre de tu empresa/organización]. Al acceder y utilizar este sitio web, 
        aceptas quedar vinculado por estos términos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Información general</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="mb-2"><strong>Titular:</strong> {RESTAURANT_NAME}</p>
        <p className="mb-2"><strong>Domicilio social:</strong> {RESTAURANT_ADDRESS}</p>
        <p className="mb-2"><strong>Email:</strong> {RESTAURANT_EMAIL}</p>
        <p className="mb-2"><strong>Teléfono:</strong> {RESTAURANT_PHONE}</p>
        <p><strong>Sitio web:</strong> www.tusitio.com</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Objeto y ámbito de aplicación</h2>
      <p className="mb-6">
        Estos términos regulan el acceso y uso del sitio web, incluyendo todos los 
        contenidos, servicios y funcionalidades disponibles en el mismo. El uso del 
        sitio web implica la aceptación plena de estos términos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Condiciones de acceso y uso</h2>
      <p className="mb-4">El acceso al sitio web es gratuito. Como usuario, te comprometes a:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Utilizar el sitio web conforme a la ley y estos términos</li>
        <li>No realizar actividades que puedan dañar, sobrecargar o deteriorar el sitio</li>
        <li>No introducir virus, malware o cualquier código malicioso</li>
        <li>No intentar acceder a áreas restringidas del sitio web</li>
        <li>Proporcionar información veraz y actualizada cuando sea requerida</li>
        <li>No utilizar el sitio web para fines comerciales no autorizados</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contenidos</h2>
      <p className="mb-4">
        Todos los contenidos del sitio web (textos, imágenes, vídeos, logos, etc.) 
        están protegidos por derechos de propiedad intelectual. Queda prohibido:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Reproducir, distribuir o comunicar públicamente los contenidos sin autorización</li>
        <li>Modificar, alterar o descompilar los contenidos</li>
        <li>Utilizar los contenidos para fines comerciales sin permiso expreso</li>
        <li>Eliminar o modificar marcas, logos o avisos de propiedad intelectual</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Responsabilidades y limitaciones</h2>
      <p className="mb-4">
        El titular del sitio web se compromete a mantener el sitio operativo, 
        sin embargo:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>No garantiza la disponibilidad continua del sitio web</li>
        <li>No se hace responsable de interrupciones por mantenimiento o causas técnicas</li>
        <li>No garantiza la ausencia de errores en los contenidos</li>
        <li>No se responsabiliza del uso indebido que terceros puedan hacer del sitio</li>
      </ul>
      <p className="mb-6">
        El usuario es responsable de los daños que pueda causar por el uso indebido 
        del sitio web.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Enlaces externos</h2>
      <p className="mb-6">
        El sitio web puede contener enlaces a sitios web de terceros. No nos hacemos 
        responsables del contenido, políticas de privacidad o prácticas de estos 
        sitios externos. El acceso a estos enlaces es bajo tu propia responsabilidad.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Protección de datos</h2>
      <p className="mb-6">
        El tratamiento de datos personales se rige por nuestra 
        <a 
          href="/privacy-policy" 
          className="text-blue-600 underline ml-1"
        >
          Política de Privacidad
        </a>
        , que forma parte integrante de estos términos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
      <p className="mb-6">
        Este sitio web utiliza cookies según se describe en nuestra 
        <a 
          href="/cookies-policy" 
          className="text-blue-600 underline ml-1"
        >
          Política de Cookies
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Propiedad intelectual</h2>
      <p className="mb-6">
        Todos los derechos de propiedad intelectual del sitio web, su código fuente, 
        diseño, estructura de navegación y los distintos elementos contenidos en el 
        mismo son titularidad de [Nombre de tu empresa], quien tiene el derecho 
        exclusivo de utilizarlos en el tráfico económico.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Duración y terminación</h2>
      <p className="mb-6">
        Estos términos permanecen en vigor mientras uses el sitio web. Nos reservamos 
        el derecho de suspender o terminar tu acceso al sitio web en cualquier momento, 
        especialmente en caso de incumplimiento de estos términos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Modificaciones</h2>
      <p className="mb-6">
        Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier 
        momento. Los cambios serán efectivos desde su publicación en el sitio web. 
        Es responsabilidad del usuario revisar periódicamente estos términos.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">12. Legislación aplicable y jurisdicción</h2>
      <p className="mb-6">
        Estos Términos de Servicio se rigen por la legislación española. Para la 
        resolución de cualquier controversia, las partes se someten a los juzgados 
        y tribunales de [Tu ciudad], renunciando expresamente a cualquier otro fuero 
        que pudiera corresponderles.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contacto</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="mb-4">
          Para cualquier consulta sobre estos Términos de Servicio:
        </p>
        <p className="mb-2"><strong>Email:</strong> {RESTAURANT_EMAIL}</p>
        <p className="mb-2"><strong>Teléfono:</strong> {RESTAURANT_PHONE}</p>
        <p><strong>Dirección:</strong> {RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION}</p>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Nota importante:</strong> Al continuar navegando por este sitio web, 
          confirmas que has leído, entendido y aceptado estos Términos de Servicio.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;