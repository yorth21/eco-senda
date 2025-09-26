import { Badge } from "@/components/ui/badge";

export const CarnavalHeader = () => {
  return (
    <header className="w-full border-b border-white/15 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* Logo tipográfico N&B */}
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  N
                </span>
                <span className="text-2xl font-bold text-black bg-white rounded-sm px-1 ml-1">
                  &
                </span>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent ml-1">
                  B
                </span>
              </div>
              
              {/* Título principal */}
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-white">
                  Guía Verde · Carnaval N&B
                </h1>
                <p className="text-sm text-white/70">
                  Sostenibilidad para el Carnaval de Negros y Blancos
                </p>
              </div>
            </div>
          </div>

          {/* Badges de sostenibilidad */}
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
              className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 backdrop-blur-sm hover:bg-yellow-400/30 transition-colors hidden md:inline-flex"
            >
              #Recicla
            </Badge>
          </div>
        </div>

        {/* Título móvil */}
        <div className="sm:hidden pb-3">
          <h1 className="text-lg font-semibold text-white">
            Guía Verde · Carnaval N&B
          </h1>
        </div>
      </div>

      {/* Decoración de confeti */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
    </header>
  );
};
