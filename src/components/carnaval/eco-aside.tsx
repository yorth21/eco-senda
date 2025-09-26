import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Leaf, Recycle, Users, Sparkles } from "lucide-react";

interface EcoAsideProps {
  onPickTopic: (topic: string) => void;
}

export const EcoAside = ({ onPickTopic }: EcoAsideProps) => {
  const ecoTips = [
    "Usa botellas reutilizables",
    "Prefiere transporte público",
    "Separa residuos correctamente",
    "Evita plásticos de un solo uso",
    "Participa en limpiezas comunitarias"
  ];

  const popularTopics = [
    { topic: "Puntos de reciclaje en Pasto", icon: Recycle },
    { topic: "Transporte sostenible al Carnaval", icon: Users },
    { topic: "Cómo reducir residuos en eventos", icon: Leaf },
    { topic: "Iniciativas verdes del Carnaval", icon: Sparkles }
  ];

  return (
    <aside className="space-y-6 p-4">
      {/* Eco-Tips rápidos */}
      <Card className="bg-white/5 border-white/15 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-400 flex items-center gap-2 text-lg">
            <Leaf className="h-5 w-5" />
            Eco-Tips Rápidos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {ecoTips.map((tip) => (
            <div key={tip} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
              <p className="text-sm text-white/80 leading-relaxed">{tip}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Temas populares */}
      <Card className="bg-white/5 border-white/15 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader className="pb-3">
          <CardTitle className="text-fuchsia-400 flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5" />
            Temas Populares
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {popularTopics.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.topic}
                variant="ghost"
                size="sm"
                onClick={() => onPickTopic(item.topic)}
                className="w-full justify-start text-left h-auto p-3 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
              >
                <Icon className="h-4 w-4 mr-2 text-white/60 group-hover:text-white/80 transition-colors" />
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  {item.topic}
                </span>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      <Separator className="bg-white/15" />

      {/* Créditos culturales */}
      <Card className="bg-white/5 border-white/15 backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardHeader className="pb-3">
          <CardTitle className="text-yellow-400 flex items-center gap-2 text-lg">
            <Users className="h-5 w-5" />
            Cultura & Tradición
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-white/80 leading-relaxed">
            El <strong className="text-white">Carnaval de Negros y Blancos</strong> es 
            Patrimonio Cultural Inmaterial de la Humanidad (UNESCO).
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="border-yellow-400/30 text-yellow-300 bg-yellow-400/10"
            >
              Tradición
            </Badge>
            <Badge 
              variant="outline" 
              className="border-fuchsia-400/30 text-fuchsia-300 bg-fuchsia-400/10"
            >
              Cultura
            </Badge>
            <Badge 
              variant="outline" 
              className="border-teal-400/30 text-teal-300 bg-teal-400/10"
            >
              Diversidad
            </Badge>
          </div>
          
          <p className="text-xs text-white/60 leading-relaxed">
            Celebremos de manera responsable, preservando nuestra tradición y 
            nuestro medio ambiente para futuras generaciones.
          </p>
        </CardContent>
      </Card>
    </aside>
  );
};
