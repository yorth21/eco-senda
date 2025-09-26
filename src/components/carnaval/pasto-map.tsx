"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import dinámico para evitar SSR issues con Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

interface RecyclingPoint {
  id: number;
  name: string;
  type: string;
  materials: string[];
  location: string;
  coordinates: { lat: number; lng: number };
  description: string;
  color: string;
}

interface PastoMapProps {
  recyclingPoints: RecyclingPoint[];
  selectedPoint: RecyclingPoint | null;
  onPointSelect: (point: RecyclingPoint) => void;
}

export const PastoMap = ({ recyclingPoints, onPointSelect }: PastoMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Coordenadas del centro de Pasto
  const pastoCenter: [number, number] = [1.2136, -77.2811];

  // Ruta oficial única del Carnaval de Negros y Blancos
  // Avenida Mijitayo → Carrera 26 → Calle 17 → Plaza del Carnaval → Calle 12 → Colegio Champagnat → Coliseo Libertad
  const carnavalRoute: [number, number][] = [
    // Inicio en Avenida Mijitayo (zona norte)
    [1.2037178791206615, -77.29757986859116], // Avenida Mijitayo - punto de concentración
    [1.2089401754216569, -77.28985890288747],
    [1.2147866991697909, -77.28384355557573],
    [1.217024818251381, -77.27887898988537],
    [1.2113610032095241, -77.27641193604683],
    [1.2097116634492702, -77.27672786755478],
    [1.2053777702008097, -77.27489767989431],
    [1.2040622048429446, -77.27552832061562],
    [1.202952764403655, -77.27895439785115],
    [1.2000003169073914, -77.27842684265634],
    [1.1980724336727264, -77.27672289984417],
    [1.1968114275750825, -77.27807513908314],
    [1.197932995527017, -77.27788109578427]
  ];

  // Custom icon para markers
  const createCustomIcon = (color: string) => {
    if (typeof window === 'undefined') return null;
    
    const L = require('leaflet');
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="relative">
          <div class="w-8 h-8 ${color} rounded-full shadow-lg border-2 border-white flex items-center justify-center transform hover:scale-110 transition-all duration-200">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  // Puntos comerciales destacados cerca de la ruta del Carnaval
  const carnavalHighlights = [
    {
      position: [1.2040, -77.2975] as [number, number],
      name: "Centro Comercial Mijitayo",
      description: "Zona comercial cerca del punto de inicio del desfile",
      icon: "🏬"
    },
    {
      position: [1.2090, -77.2895] as [number, number],
      name: "Almacenes La 26",
      description: "Sector comercial en la Carrera 26",
      icon: "🛍️"
    },
    {
      position: [1.2147, -77.2838] as [number, number],
      name: "Plaza de Mercado del Sur",
      description: "Mercado tradicional cerca de la ruta",
      icon: "🏪"
    },
    {
      position: [1.2113, -77.2764] as [number, number],
      name: "Centro Comercial Único",
      description: "Principal centro comercial de la zona",
      icon: "🏢"
    },
    {
      position: [1.2050, -77.2749] as [number, number],
      name: "Galería Comercial Champagnat",
      description: "Zona comercial frente al colegio",
      icon: "🛒"
    },
    {
      position: [1.2000, -77.2784] as [number, number],
      name: "Supermercado Libertad",
      description: "Supermercado cerca del punto final",
      icon: "🏪"
    },
    {
      position: [1.1979, -77.2788] as [number, number],
      name: "Restaurantes del Coliseo",
      description: "Zona gastronómica cerca del Coliseo Libertad",
      icon: "🍽️"
    }
  ];

  // Custom icon para inicio/fin de ruta
  const createRouteIcon = (type: 'start' | 'end') => {
    if (typeof window === 'undefined') return null;
    
    const L = require('leaflet');
    const isStart = type === 'start';
    
    return L.divIcon({
      className: 'custom-route-marker',
      html: `
        <div class="relative">
          <div class="w-10 h-10 ${isStart ? 'bg-green-500' : 'bg-red-500'} rounded-full shadow-xl border-3 border-white flex items-center justify-center transform hover:scale-110 transition-all duration-200">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              ${isStart 
                ? '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>'
                : '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 12a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1H9a1 1 0 00-1 1v4z" clip-rule="evenodd"></path>'
              }
            </svg>
          </div>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-gray-800 px-2 py-1 rounded shadow-lg">
            ${isStart ? 'INICIO' : 'FIN'}
          </div>
        </div>
      `,
      iconSize: [40, 50],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  };

  // Custom icon para puntos comerciales
  const createCommercialIcon = (emoji: string) => {
    if (typeof window === 'undefined') return null;
    
    const L = require('leaflet');
    
    return L.divIcon({
      className: 'custom-commercial-marker',
      html: `
        <div class="relative">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-500 rounded-full shadow-xl border-2 border-white flex items-center justify-center transform hover:scale-110 transition-all duration-200">
            <span class="text-sm">${emoji}</span>
          </div>
          <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white animate-pulse"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  if (!isClient) {
    return (
      <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
        <div className="text-white/60">Cargando mapa...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={pastoCenter}
        zoom={14}
        style={{ height: '100%', width: '100%', borderRadius: '12px' }}
        className="leaflet-container-dark"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Ruta oficial única del Carnaval de Negros y Blancos */}
        <Polyline
          positions={carnavalRoute}
          pathOptions={{
            color: '#dc2626',
            weight: 6,
            opacity: 0.9,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />

        {/* Marcador de inicio - Avenida Mijitayo */}
        <Marker
          position={carnavalRoute[0]}
          icon={createRouteIcon('start')}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-green-700 mb-1">🚩 Inicio del Desfile</h3>
              <p className="text-sm text-gray-600">Avenida Mijitayo - Punto de concentración</p>
              <p className="text-xs text-gray-500 mt-1">
                Aquí se concentran todas las comparsas antes del inicio oficial
              </p>
            </div>
          </Popup>
        </Marker>

        {/* Marcador de fin - Coliseo Libertad */}
        <Marker
          position={carnavalRoute[carnavalRoute.length - 1]}
          icon={createRouteIcon('end')}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-red-700 mb-1">🏟️ Fin del Desfile</h3>
              <p className="text-sm text-gray-600">Coliseo Libertad - Punto de llegada</p>
              <p className="text-xs text-gray-500 mt-1">
                Aquí termina oficialmente el recorrido del Carnaval
              </p>
            </div>
          </Popup>
        </Marker>

        {/* Puntos comerciales cerca de la ruta */}
        {carnavalHighlights.map((highlight, index) => (
          <Marker
            key={`commercial-${index}`}
            position={highlight.position}
            icon={createCommercialIcon(highlight.icon)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-blue-700 mb-1">
                  {highlight.icon} {highlight.name}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
                <p className="text-xs text-green-600 mt-1 font-medium">
                  📍 Punto comercial cerca de la ruta del Carnaval
                </p>
                <p className="text-xs text-blue-500 mt-1">
                  💡 Ideal para visitantes durante el evento
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {recyclingPoints.map((point) => {
          const colorMap: { [key: string]: string } = {
            'bg-emerald-500': 'bg-emerald-500',
            'bg-teal-500': 'bg-teal-500',
            'bg-fuchsia-500': 'bg-fuchsia-500',
            'bg-yellow-500': 'bg-yellow-500',
            'bg-emerald-600': 'bg-emerald-600',
            'bg-teal-600': 'bg-teal-600',
          };
          
          const iconColor = colorMap[point.color] || 'bg-emerald-500';
          const icon = createCustomIcon(iconColor);
          
          return (
            <Marker
              key={point.id}
              position={[point.coordinates.lat, point.coordinates.lng]}
              icon={icon}
              eventHandlers={{
                click: () => onPointSelect(point),
              }}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-gray-800 mb-1">{point.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{point.type}</p>
                  <p className="text-xs text-gray-500 mb-2">{point.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {point.materials.slice(0, 3).map((material) => (
                      <span 
                        key={material}
                        className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
                      >
                        {material}
                      </span>
                    ))}
                    {point.materials.length > 3 && (
                      <span className="text-xs text-gray-500">+{point.materials.length - 3} más</span>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
