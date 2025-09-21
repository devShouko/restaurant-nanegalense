import { RESTAURANT_PHONE, RESTAURANT_EMAIL, RESTAURANT_ADDRESS, RESTAURANT_LOCATION } from "@constants/constant";

const CookiePage = () => {
  const lastUpdated = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
      
      <p className="text-sm text-gray-600 mb-6">
        Última actualización: {lastUpdated}
      </p>

      <p className="mb-4">
        En este sitio web utilizamos cookies para garantizar el correcto
        funcionamiento de la página y, en su caso, mejorar la experiencia de
        navegación de los usuarios.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en el
        dispositivo del usuario (ordenador, móvil, tablet) cuando visita un
        sitio web. Sirven para recordar información sobre la visita y facilitar
        la interacción con el sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tipos de cookies que utilizamos</h2>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong>Cookies necesarias:</strong> son imprescindibles para que la
          página web funcione correctamente. Permiten, por ejemplo, mantener la
          sesión iniciada o recordar las preferencias de navegación. Estas
          cookies no requieren el consentimiento del usuario.
        </li>
        <li>
          <strong>Cookies analíticas (Google Analytics):</strong> se utilizarán
          únicamente si el usuario las acepta. Estas cookies permiten recopilar
          información anónima y agregada sobre el uso de la web (páginas
          visitadas, tiempo de permanencia, clics, etc.) con el fin de mejorar
          el contenido y la usabilidad. Estas cookies tienen una duración de 2 años.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Gestión de las cookies</h2>
      <p className="mb-4">
        En cualquier momento puedes aceptar, rechazar o configurar el uso de
        cookies a través del banner de consentimiento habilitado en esta web.
      </p>
      <p className="mb-4">
        Además, puedes eliminar o bloquear las cookies desde la configuración de
        tu navegador:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            aria-label="Configurar cookies en Google Chrome (se abre en ventana nueva)"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            aria-label="Configurar cookies en Mozilla Firefox (se abre en ventana nueva)"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            aria-label="Configurar cookies en Microsoft Edge (se abre en ventana nueva)"
          >
            Microsoft Edge
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            aria-label="Configurar cookies en Safari (se abre en ventana nueva)"
          >
            Safari
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Más información</h2>
      <p className="mb-6">
        Para obtener más detalles sobre cómo tratamos tus datos personales,
        consulta nuestra{" "}
        <a href="/politica-de-privacidad" className="text-blue-600 underline">
          Política de Privacidad
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contacto</h2>
      <p className="mb-4">
        Si tienes dudas sobre el uso de cookies en este sitio web, puedes contactarnos en:
      </p>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="mb-2"><strong>Email:</strong> {RESTAURANT_EMAIL}</p>
        <p className="mb-2"><strong>Teléfono:</strong> {RESTAURANT_PHONE}</p>
        <p><strong>Dirección:</strong> {RESTAURANT_ADDRESS}, {RESTAURANT_LOCATION}</p>
      </div>
    </div>
  );
};

export default CookiePage;