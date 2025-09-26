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
    <div className="min-h-screen relative bg-black text-white">
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
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Eco Senda
                </span><br />
                Carnaval Sostenible
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Celebra el <strong className="text-white">Carnaval de Negros y Blancos</strong> de manera sostenible. 
                Tu asistente virtual para un carnaval responsable con el medio ambiente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/chat">
                  <Button className="bg-emerald-500/15 hover:bg-emerald-500/25 backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-400/50 text-white text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-2xl">
                    Comenzar Chat Verde
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <Link href="/maps">
                    <Button className="bg-fuchsia-500/15 hover:bg-fuchsia-500/25 backdrop-blur-sm border border-fuchsia-400/30 hover:border-fuchsia-400/50 text-white px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105">
                      📍 Ver Mapa de Reciclaje
                    </Button>
                  </Link>
                  
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2">
                      #MenosPlástico
                    </Badge>
                    <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2 hidden sm:inline-flex">
                      #Reusa
                    </Badge>
                    <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 px-4 py-2 hidden sm:inline-flex">
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
                      <Card className="bg-white/5 border-white/15 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up cursor-pointer hover:border-white/25">
                        <CardHeader className="text-center pb-4">
                          <div className="mx-auto mb-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm w-fit">
                            <Icon className={`h-8 w-8 ${feature.color}`} />
                          </div>
                          <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                          <p className="text-emerald-400 text-xs mt-2">→ Haz clic para explorar</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                }
                
                return (
                  <Card key={feature.title} className="bg-white/5 border-white/15 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 rounded-2xl bg-white/10 backdrop-blur-sm w-fit">
                        <Icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
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
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  ¿Listo para un Carnaval Sostenible?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Comienza a planificar tu experiencia eco-friendly. Pregúntame sobre reciclaje, 
                  transporte, puntos verdes y más consejos para disfrutar responsablemente.
                </p>
                <Link href="/chat">
                  <Button className="bg-emerald-500/15 hover:bg-emerald-500/25 backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-400/50 text-white text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-2xl">
                    Iniciar Conversación Verde
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