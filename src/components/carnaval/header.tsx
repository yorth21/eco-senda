import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "lucide-react";

export const CarnavalHeader = () => {
  return (
    <header className="w-full border-b border-white/15 bg-black/50 backdrop-blur-md">
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
                className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 backdrop-blur-sm hover:bg-emerald-500/30 transition-colors"
              >
                #MenosPlástico
              </Badge>
              <Badge 
                variant="secondary" 
                className="bg-teal-500/20 text-teal-300 border-teal-500/30 backdrop-blur-sm hover:bg-teal-500/30 transition-colors hidden sm:inline-flex"
              >
                #Reusa
              </Badge>
              <Badge 
                variant="secondary" 
                className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 backdrop-blur-sm hover:bg-yellow-400/30 transition-colors hidden lg:inline-flex"
              >
                #Recicla
              </Badge>
            </div>
            
            {/* Botón de Login */}
            <Link href="/login">
              <Button 
                variant="ghost" 
                size="sm"
                className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white backdrop-blur-sm transition-all duration-200"
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
