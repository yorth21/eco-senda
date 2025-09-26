"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import dinámico para evitar SSR issues con Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

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
