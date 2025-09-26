"use client";

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const carnavalFacts = [
  "🎭 El Carnaval de Negros y Blancos es Patrimonio Cultural Inmaterial de la Humanidad desde 2009",
  "🌈 Cada año participan más de 10,000 artistas en las comparsas y carrozas del Carnaval",
  "♻️ En 2024 se reciclaron más de 50 toneladas de materiales durante el Carnaval",
  "🎨 Las carrozas pueden llegar a medir hasta 15 metros de altura y pesar 8 toneladas",
  "🌱 Los artesanos utilizan materiales 100% biodegradables como papel maché y fibras naturales",
  "🎪 El Carnaval atrae a más de 400,000 visitantes nacionales e internacionales cada año",
  "📅 La tradición del Carnaval de Pasto tiene más de 500 años de historia",
  "🌍 Es considerado uno de los carnavales más importantes y coloridos de América Latina",
  "🎭 El 5 de enero se celebra el 'Día de los Negros' y el 6 de enero el 'Día de los Blancos'",
  "🌿 Muchas comparsas ahora usan pinturas ecológicas y biodegradables para cuidar el medio ambiente"
];

export const FloatingAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mostrar el asistente con dato curioso automáticamente después de 2 segundos
    const showTimer = setTimeout(() => {
      const randomFact = carnavalFacts[Math.floor(Math.random() * carnavalFacts.length)];
      setCurrentFact(randomFact);
      setIsVisible(true);
      setIsExpanded(true); // Siempre expandido automáticamente
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      // Auto-colapsar después de 8 segundos
      const hideTimer = setTimeout(() => {
        setIsExpanded(false);
      }, 8000);

      return () => clearTimeout(hideTimer);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    if (!isExpanded) {
      // Si está colapsado, mostrar un nuevo dato curioso automáticamente
      const randomFact = carnavalFacts[Math.floor(Math.random() * carnavalFacts.length)];
      setCurrentFact(randomFact);
      setIsExpanded(true); // Siempre expandir para mostrar el dato
    } else {
      // Si está expandido, colapsarlo
      setIsExpanded(false);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Globo de mensaje */}
      <div className={`
        transform transition-all duration-500 ease-out
        ${isExpanded 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }
      `}>
        <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-[#291700] p-4 max-w-xs">
          {/* Pico del globo */}
          <div className="absolute bottom-[-12px] right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#291700]"></div>
          <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
          
          {/* Botón de cerrar */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

          {/* Contenido */}
          <div className="pr-6">
            <div className="text-sm font-bold text-[#291700] mb-2 flex items-center gap-2">
              <span className="text-lg">🎭</span>
              ¿Sabías que...?
            </div>
            <p className="text-sm text-[#291700] leading-relaxed">
              {currentFact}
            </p>
          </div>
        </div>
      </div>

      {/* Avatar del asistente */}
      <button
        type="button"
        onClick={handleToggle}
        className={`
          cel-floating-assistant transform transition-all duration-300
          ${isExpanded ? 'scale-110' : 'scale-100 hover:scale-105'}
        `}
      >
        <div className="relative">
          {/* Personaje */}
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg border-4 border-white flex items-center justify-center">
            <span className="text-2xl">🎭</span>
          </div>
          
          {/* Indicador de dato curioso disponible */}
          {!isExpanded && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
              <MessageCircle className="h-3 w-3 text-white" />
            </div>
          )}
          
          {/* Efecto de respiración */}
          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
        </div>
      </button>
    </div>
  );
};
