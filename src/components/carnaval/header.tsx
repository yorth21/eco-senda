import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "lucide-react";

export const CarnavalHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-cultural-header shadow-lg z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Logo de la empresa */}
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Eco Senda Logo"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              
              {/* Título principal */}
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-white">
                  Eco Senda
                </h1>
                <p className="text-sm text-white/70">
                  Sostenibilidad para el Carnaval de Negros y Blancos
                </p>
              </div>
            </div>
          </div>

          {/* Badges de sostenibilidad y Login */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Badge 
                variant="secondary" 
                className="bg-white/90 text-red-600 border-red-300 font-bold hover:bg-red-50 transition-colors shadow-md"
              >
                #MenosPlástico
              </Badge>
              <Badge 
                variant="secondary" 
                className="bg-white/90 text-orange-600 border-orange-300 font-bold hover:bg-orange-50 transition-colors shadow-md hidden sm:inline-flex"
              >
                #Reusa
              </Badge>
              <Badge 
                variant="secondary" 
                className="bg-white/90 text-yellow-600 border-yellow-400 font-bold hover:bg-yellow-50 transition-colors shadow-md hidden lg:inline-flex"
              >
                #Recicla
              </Badge>
            </div>
            
            {/* Botón de Login */}
            <Link href="/login">
              <Button 
                variant="ghost" 
                size="sm"
                className="bg-white/90 hover:bg-white text-blue-700 border-2 border-white hover:border-blue-200 font-bold shadow-lg transition-all duration-200 hover:scale-105"
              >
                <UserIcon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Iniciar Sesión</span>
                <span className="sm:hidden">Login</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Título móvil */}
        <div className="sm:hidden pb-3">
          <h1 className="text-lg font-semibold text-white">
            Eco Senda
          </h1>
        </div>
      </div>

      {/* Decoración de confeti */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
    </header>
  );
};
