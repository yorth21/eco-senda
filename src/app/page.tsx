"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon, LeafIcon, RecycleIcon, UsersIcon, SparklesIcon } from "lucide-react";
import { CarnavalHeader } from "@/components/carnaval/header";
import { FestiveBackground } from "@/components/carnaval/festive-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  const features = [
    {
      icon: LeafIcon,
      title: "Consejos Eco-Friendly",
      description: "Aprende cómo reducir tu huella ambiental durante el carnaval",
      color: "text-emerald-400"
    },
      {
        icon: RecycleIcon,
        title: "Puntos de Reciclaje",
        description: "Encuentra dónde reciclar tus residuos en Pasto",
        color: "text-teal-400",
        link: "/maps"
      },
    {
      icon: SparklesIcon,
      title: "Cultura Responsable",
      description: "Celebra respetando nuestras tradiciones y el medio ambiente",
      color: "text-yellow-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Toneladas de Residuos Reducidas" },
    { number: "10K+", label: "Personas Impactadas" },
    { number: "50+", label: "Puntos de Reciclaje" },
    { number: "100%", label: "Carnaval Sostenible" }
  ];

  return (
    <div className="min-h-screen relative text-white">
      <FestiveBackground />
      
      <div className="relative z-10">
        <CarnavalHeader />
        
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/logo.png"
                  alt="Eco Senda Logo"
                  width={240}
                  height={240}
                  className="rounded-2xl"
                />
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-shadow-cultural">
                <span className="text-gradient-cultural">
                  Eco Senda
                </span><br />
                <span className="text-white">Carnaval Sostenible</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto mb-12 leading-relaxed text-shadow-cultural">
                Celebra el <strong className="text-yellow-300">Carnaval de Negros y Blancos</strong> de manera sostenible. 
                Tu asistente virtual para un carnaval responsable con el medio ambiente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/chat">
                  <Button className="btn-festivo text-white text-lg px-8 py-4 rounded-2xl font-bold shadow-lg">
                    🎭 Comenzar Chat Verde
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <Link href="/maps">
                    <Button className="bg-white/90 hover:bg-white text-purple-700 border-2 border-purple-300 hover:border-purple-400 px-6 py-3 rounded-2xl font-bold transition-all duration-200 hover:scale-105 shadow-lg">
                      📍 Ver Mapa de Reciclaje
                    </Button>
                  </Link>
                  
                  <div className="flex gap-2">
                    <Badge className="bg-white/90 text-red-600 border-red-300 font-bold shadow-md px-4 py-2">
                      #MenosPlástico
                    </Badge>
                    <Badge className="bg-white/90 text-green-600 border-green-300 font-bold shadow-md px-4 py-2 hidden sm:inline-flex">
                      #Reusa
                    </Badge>
                    <Badge className="bg-white/90 text-yellow-600 border-yellow-400 font-bold shadow-md px-4 py-2 hidden sm:inline-flex">
                      #Recicla
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Cómo Te Puedo Ayudar?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Descubre todas las formas en que puedes hacer tu experiencia del carnaval más sostenible
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
              {features.map((feature) => {
                const Icon = feature.icon;
                
                if (feature.link) {
                  return (
                    <Link key={feature.title} href={feature.link}>
                      <Card className="card-cultural hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up cursor-pointer">
                        <CardHeader className="text-center pb-4">
                          <div className="mx-auto mb-4 p-4 rounded-full bg-white/90 shadow-lg w-fit">
                            <Icon className={`h-8 w-8 ${feature.color.replace('text-', 'text-').replace('-400', '-600')}`} />
                          </div>
                          <CardTitle className="text-white text-lg font-bold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-white/90 text-sm leading-relaxed font-medium">{feature.description}</p>
                          <p className="text-yellow-300 text-xs mt-3 font-bold">🎭 ¡Haz clic para explorar!</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                }
                
                return (
                  <Card key={feature.title} className="card-cultural hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-4 rounded-full bg-white/90 shadow-lg w-fit">
                        <Icon className={`h-8 w-8 ${feature.color.replace('text-', 'text-').replace('-400', '-600')}`} />
                      </div>
                      <CardTitle className="text-white text-lg font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-white/90 text-sm leading-relaxed font-medium">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Impacto del Carnaval Verde
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Juntos estamos transformando la celebración más importante de Nariño
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center animate-fade-in-up">
                  <div className="card-cultural rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-4xl sm:text-5xl font-bold text-gradient-cultural mb-3">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold text-sm sm:text-base">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="card-cultural border-artesanal">
              <CardContent className="p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  🎭 ¿Listo para un Carnaval Sostenible?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
                  Comienza a planificar tu experiencia eco-friendly. Pregúntame sobre reciclaje, 
                  transporte, puntos verdes y más consejos para disfrutar responsablemente.
                </p>
                <Link href="/chat">
                  <Button className="btn-festivo text-white text-lg px-8 py-4 rounded-2xl font-bold shadow-lg">
                    🌱 Iniciar Conversación Verde
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/15">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Eco Senda Logo"
                width={32}
                height={32}
                className="rounded-lg mr-3"
              />
              <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Eco Senda
              </div>
            </div>
            <p className="text-white/60 text-sm">
              Sostenibilidad para el Carnaval de Negros y Blancos
            </p>
            <p className="text-white/40 text-xs mt-2">
              Celebremos de manera responsable, preservando nuestra tradición y nuestro medio ambiente
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}