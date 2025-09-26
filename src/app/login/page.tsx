"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, UserIcon, LockIcon } from "lucide-react";
import { CarnavalHeader } from "@/components/carnaval/header";
import { FestiveBackground } from "@/components/carnaval/festive-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import users from "@/data/users.json";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Buscar usuario en el JSON
    const user = users.users.find(u => u.email === email && u.password === password);

    if (user) {
      // Simular autenticación exitosa
      localStorage.setItem("user", JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        avatar: user.avatar,
        ecoPoints: user.ecoPoints
      }));
      
      // Redireccionar al dashboard o página principal
      router.push("/dashboard");
    } else {
      setError("Credenciales incorrectas. Verifica tu email y contraseña.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative text-white">
      <FestiveBackground />
      
      <div className="relative z-10">
        <CarnavalHeader />
        
        {/* Espaciado para el header fijo */}
        <div className="h-20"></div>
        
        {/* Header de la página */}
        <section className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="bg-white/90 hover:bg-white text-[#291700] border-2 border-[#291700] hover:border-black font-bold shadow-lg transition-all duration-200 hover:scale-105 rounded-lg"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold titulo-seccion">
                  Iniciar Sesión
                </h1>
                <p className="subtitulo-seccion">
                  Accede a tu cuenta de Eco Senda
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-md mx-auto">
            
            {/* Formulario de Login */}
            <Card className="card-cultural">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 rounded-full bg-emerald-500/20 backdrop-blur-sm w-fit">
                  <UserIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">
                  Bienvenido de vuelta 🎭
                </CardTitle>
                <p className="text-sm">
                  Ingresa tus credenciales para continuar
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Credenciales de prueba */}
                <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-4">
                  <p className="text-emerald-700 text-sm font-medium mb-2">
                    🧪 Credenciales de prueba:
                  </p>
                  <div className="space-y-1 text-xs text-emerald-800">
                    <p><strong>Email:</strong> codejam@gmail.com</p>
                    <p><strong>Contraseña:</strong> codejam123</p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="bg-white border-2 border-black text-gray-900 placeholder-gray-500 pl-10 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Contraseña
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-white border-2 border-black text-gray-900 placeholder-gray-500 pl-10 pr-10 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-4 w-4" />
                        ) : (
                          <EyeIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                      <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading || !email || !password}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 border-2 border-emerald-800 hover:border-emerald-900 disabled:border-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-xl py-4 transition-all duration-200 hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Iniciando sesión...
                      </div>
                    ) : (
                      "Iniciar Sesión 🎭"
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/15"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-[#e5e0c3] px-2 text-sm opacity-80">o continúa con</span>
                  </div>
                </div>

                {/* Social Login Placeholder */}
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-600 text-sm"
                    disabled
                  >
                    🌟 Invitado del Carnaval
                  </Button>
                  <p className="text-xs text-center opacity-60">
                    (Próximamente: Login social)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="mt-8 text-center">
              <div className="flex justify-center gap-2 mb-4">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  #SeguroEcoAmigable
                </Badge>
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  #CarnavalDigital
                </Badge>
              </div>
              <p className="text-sm opacity-80">
                ¿No tienes cuenta?{" "}
                <Link href="/register" className="text-emerald-600 hover:text-emerald-500 underline font-medium">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
