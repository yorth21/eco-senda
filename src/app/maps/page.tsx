"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, RecycleIcon, TrashIcon, LeafIcon } from "lucide-react";
import { CarnavalHeader } from "@/components/carnaval/header";
import { FestiveBackground } from "@/components/carnaval/festive-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PastoMap } from "@/components/carnaval/pasto-map";

// Datos de puntos de reciclaje en Pasto
const recyclingPoints = [
  {
    id: 1,
    name: "Plaza de Nariño",
    type: "Punto Principal",
    materials: ["Plástico", "Papel", "Cartón", "Vidrio"],
    location: "Centro de Pasto",
    coordinates: { lat: 1.2136, lng: -77.2811 },
    description: "Punto principal durante el carnaval con contenedores especializados",
    color: "bg-emerald-500"
  },
  {
    id: 2,
    name: "Parque Infantil",
    type: "Punto Familiar",
    materials: ["Plástico", "Papel", "Orgánicos"],
    location: "Zona Rosa",
    coordinates: { lat: 1.2140, lng: -77.2800 },
    description: "Ideal para familias con niños, educación ambiental",
    color: "bg-teal-500"
  },
  {
    id: 3,
    name: "Estadio Libertad",
    type: "Punto Deportivo",
    materials: ["Plástico", "Latas", "Vidrio"],
    location: "Av. Los Estudiantes",
    coordinates: { lat: 1.2150, lng: -77.2820 },
    description: "Para eventos deportivos y actividades del carnaval",
    color: "bg-fuchsia-500"
  },
  {
    id: 4,
    name: "Centro Comercial Único",
    type: "Punto Comercial",
    materials: ["Plástico", "Papel", "Cartón", "Electrónicos"],
    location: "Calle 18",
    coordinates: { lat: 1.2125, lng: -77.2790 },
    description: "Punto especializado en residuos comerciales",
    color: "bg-yellow-500"
  },
  {
    id: 5,
    name: "Universidad de Nariño",
    type: "Punto Educativo",
    materials: ["Papel", "Cartón", "Plástico", "Orgánicos"],
    location: "Ciudad Universitaria",
    coordinates: { lat: 1.2160, lng: -77.2850 },
    description: "Centro de educación ambiental y reciclaje",
    color: "bg-emerald-600"
  },
  {
    id: 6,
    name: "Terminal de Transportes",
    type: "Punto de Transporte",
    materials: ["Plástico", "Papel", "Latas"],
    location: "Vía Panamericana",
    coordinates: { lat: 1.2100, lng: -77.2750 },
    description: "Para visitantes que llegan a la ciudad",
    color: "bg-teal-600"
  }
];

const materialIcons = {
  "Plástico": RecycleIcon,
  "Papel": TrashIcon,
  "Cartón": TrashIcon,
  "Vidrio": RecycleIcon,
  "Latas": RecycleIcon,
  "Orgánicos": LeafIcon,
  "Electrónicos": TrashIcon
};

export default function MapsPage() {
  const [selectedPoint, setSelectedPoint] = useState<typeof recyclingPoints[0] | null>(null);

  return (
    <div className="min-h-screen relative bg-black text-white">
      <FestiveBackground />
      
      <div className="relative z-10">
        <CarnavalHeader />
        
        {/* Header de la página */}
        <section className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Mapa de Reciclaje
                </h1>
                <p className="text-white/70">
                  Puntos de reciclaje para el Carnaval de Negros y Blancos
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Mapa */}
              <div className="lg:col-span-2">
                <Card className="bg-white/5 border-white/15 backdrop-blur-sm h-[500px] lg:h-[600px]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-lg">
                        📍 Centro de Pasto
                      </CardTitle>
                      <p className="text-white/70 text-sm">
                        Haz clic en los puntos para ver detalles
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 h-full">
                    <div className="h-full -mt-3">
                      <PastoMap 
                        recyclingPoints={recyclingPoints}
                        selectedPoint={selectedPoint}
                        onPointSelect={setSelectedPoint}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar con información */}
              <div className="space-y-6">
                {/* Punto seleccionado */}
                {selectedPoint ? (
                  <Card className="bg-white/5 border-white/15 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${selectedPoint.color}`}></div>
                        <div>
                          <CardTitle className="text-white">{selectedPoint.name}</CardTitle>
                          <p className="text-white/60 text-sm">{selectedPoint.type}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/80 text-sm">{selectedPoint.description}</p>
                      
                      <div>
                        <p className="text-white font-medium mb-2">Materiales aceptados:</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedPoint.materials.map((material) => {
                            const Icon = materialIcons[material as keyof typeof materialIcons] || RecycleIcon;
                            return (
                              <Badge 
                                key={material}
                                className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              >
                                <Icon className="h-3 w-3 mr-1" />
                                {material}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-white/60 text-sm">
                          📍 {selectedPoint.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-white/5 border-white/15 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Selecciona un punto</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 text-sm">
                        Haz clic en cualquier punto verde del mapa para ver información detallada sobre ese centro de reciclaje.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Leyenda */}
                <Card className="bg-white/5 border-white/15 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <RecycleIcon className="h-5 w-5 text-emerald-400" />
                      Tipos de Puntos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span className="text-white/80 text-sm">Puntos Principales</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                        <span className="text-white/80 text-sm">Puntos Familiares</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
                        <span className="text-white/80 text-sm">Puntos Deportivos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-white/80 text-sm">Puntos Comerciales</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Consejos */}
                <Card className="bg-white/5 border-white/15 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <LeafIcon className="h-5 w-5 text-emerald-400" />
                      Consejos Eco
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-white/70 text-sm">
                      • Separa los residuos antes de llegar
                    </p>
                    <p className="text-white/70 text-sm">
                      • Limpia los envases de comida
                    </p>
                    <p className="text-white/70 text-sm">
                      • Pregunta si tienes dudas
                    </p>
                    <p className="text-white/70 text-sm">
                      • Comparte la ubicación con amigos
                    </p>
                  </CardContent>
                </Card>

                {/* Navegación */}
                {selectedPoint && (
                  <Card className="bg-white/5 border-white/15 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        🗺️ Cómo llegar
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button 
                        className="w-full bg-emerald-500/15 hover:bg-emerald-500/25 backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-400/50 text-white"
                        onClick={() => {
                          const { lat, lng } = selectedPoint.coordinates;
                          const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
                          window.open(url, '_blank');
                        }}
                      >
                        📍 Abrir en Google Maps
                      </Button>
                      
                      <div className="text-white/70 text-xs space-y-1">
                        <p>• Desde Plaza de Nariño: ~5-10 min caminando</p>
                        <p>• Transporte público disponible</p>
                        <p>• Estacionamiento limitado en eventos</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
