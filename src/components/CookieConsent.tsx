import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // siempre activas
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', JSON.stringify(all));
    setShowPopup(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowPopup(false);
  };

  const handleSaveConfig = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Uso de Cookies</h2>

        {!showConfig ? (
          <>
            <p className="text-gray-600 mb-6">
              Usamos cookies propias y de terceros para fines analíticos y de marketing. 
              Puedes aceptarlas, rechazarlas o configurar tus preferencias. 
              Consulta nuestra <a href="/politica-de-cookies" className="text-blue-600 underline">Política de Cookies</a>.
            </p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleAcceptAll}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Aceptar todas
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors"
              >
                Rechazar todas
              </button>
              <button
                onClick={() => setShowConfig(true)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
              >
                Configurar
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-4">Selecciona tus preferencias:</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked disabled />
                <span>Necesarias (siempre activas)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                />
                <span>Analíticas</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                />
                <span>Marketing</span>
              </label>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSaveConfig}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Guardar preferencias
              </button>
              <button
                onClick={() => setShowConfig(false)}
                className="text-gray-500 underline"
              >
                Volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;