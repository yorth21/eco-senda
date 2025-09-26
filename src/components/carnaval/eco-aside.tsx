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
    <aside className="space-y-6 p-6">
      {/* Eco-Tips rápidos */}
      <Card className="cel-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-800 flex items-center gap-2 text-lg font-bold">
            <Leaf className="h-5 w-5" />
            Eco-Tips Rápidos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {ecoTips.map((tip) => (
            <div key={tip} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-700 mt-2 flex-shrink-0" />
              <p className="text-sm leading-relaxed font-medium text-gray-800">{tip}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Temas populares */}
      <Card className="cel-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-fuchsia-800 flex items-center gap-2 text-lg font-bold">
            <Sparkles className="h-5 w-5" />
            Temas Populares
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularTopics.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.topic}
                variant="ghost"
                size="sm"
                onClick={() => onPickTopic(item.topic)}
                className="w-full justify-start text-left h-auto p-4 hover:bg-white/30 border border-gray-300 hover:border-gray-400 transition-all group rounded-lg"
              >
                <Icon className="h-5 w-5 mr-3 text-gray-700 group-hover:text-gray-900 transition-colors" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-all">
                  {item.topic}
                </span>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      <Separator className="bg-gray-200" />

      {/* Créditos culturales */}
      <Card className="cel-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-yellow-800 flex items-center gap-2 text-lg font-bold">
            <Users className="h-5 w-5" />
            Cultura & Tradición
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm leading-relaxed font-medium text-gray-800">
            El <strong className="text-gray-900">Carnaval de Negros y Blancos</strong> es 
            Patrimonio Cultural Inmaterial de la Humanidad (UNESCO).
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="outline" 
              className="border-yellow-500 text-yellow-700 bg-yellow-50"
            >
              Tradición
            </Badge>
            <Badge 
              variant="outline" 
              className="border-fuchsia-500 text-fuchsia-700 bg-fuchsia-50"
            >
              Cultura
            </Badge>
            <Badge 
              variant="outline" 
              className="border-teal-500 text-teal-700 bg-teal-50"
            >
              Diversidad
            </Badge>
          </div>
          
          <p className="text-xs leading-relaxed font-medium text-gray-700">
            Celebremos de manera responsable, preservando nuestra tradición y 
            nuestro medio ambiente para futuras generaciones.
          </p>
        </CardContent>
      </Card>
    </aside>
  );
};
