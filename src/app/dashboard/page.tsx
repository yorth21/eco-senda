"use client";

import Link from 'next/link';
import { ArrowLeft, Trophy, Star, Flame, CheckCircle, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CircularProgress } from '@/components/ui/circular-progress';

// Tipos para el sistema de gamificación
interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'reciclaje' | 'carnaval' | 'sostenibilidad' | 'cultura';
  difficulty: 'fácil' | 'medio' | 'difícil';
  points: number;
  progress: number;
  maxProgress: number;
  completed: boolean;
  locked: boolean;
  icon: string;
  reward?: string;
}

interface UserStats {
  totalPoints: number;
  level: number;
  challengesCompleted: number;
  streak: number;
  badges: string[];
}

export default function DashboardPage() {
  const userStats: UserStats = {
    totalPoints: 1250,
    level: 3,
    challengesCompleted: 8,
    streak: 5,
    badges: ['🌱', '♻️', '🎭']
  };

  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Explorador del Carnaval',
      description: 'Visita 5 puntos comerciales cerca de la ruta del Carnaval',
      category: 'carnaval',
      difficulty: 'fácil',
      points: 100,
      progress: 3,
      maxProgress: 5,
      completed: false,
      locked: false,
      icon: '🎭',
      reward: 'Badge: Explorador'
    },
    {
      id: '2',
      title: 'Maestro del Reciclaje',
      description: 'Identifica 10 puntos de reciclaje en el mapa',
      category: 'reciclaje',
      difficulty: 'medio',
      points: 200,
      progress: 7,
      maxProgress: 10,
      completed: false,
      locked: false,
      icon: '♻️',
      reward: 'Badge: Eco Warrior'
    },
    {
      id: '3',
      title: 'Guía Verde Experto',
      description: 'Completa 5 conversaciones sobre sostenibilidad en el chat',
      category: 'sostenibilidad',
      difficulty: 'medio',
      points: 250,
      progress: 2,
      maxProgress: 5,
      completed: false,
      locked: false,
      icon: '🌱',
      reward: 'Badge: Consultor Verde'
    },
    {
      id: '4',
      title: 'Conocedor Cultural',
      description: 'Aprende sobre 3 tradiciones sostenibles del Carnaval',
      category: 'cultura',
      difficulty: 'fácil',
      points: 150,
      progress: 1,
      maxProgress: 3,
      completed: false,
      locked: false,
      icon: '🏛️',
      reward: 'Badge: Historiador'
    },
    {
      id: '5',
      title: 'Eco Champion',
      description: 'Alcanza 2000 puntos totales de sostenibilidad',
      category: 'sostenibilidad',
      difficulty: 'difícil',
      points: 500,
      progress: 1250,
      maxProgress: 2000,
      completed: false,
      locked: false,
      icon: '🏆',
      reward: 'Título: Eco Champion'
    },
    {
      id: '6',
      title: 'Cartógrafo del Carnaval',
      description: 'Explora toda la ruta del Carnaval en el mapa',
      category: 'carnaval',
      difficulty: 'medio',
      points: 300,
      progress: 0,
      maxProgress: 1,
      completed: false,
      locked: true,
      icon: '🗺️',
      reward: 'Badge: Navegante'
    }
  ];

  const getCategoryColor = (category: Challenge['category']) => {
    switch (category) {
      case 'reciclaje': return 'bg-green-500';
      case 'carnaval': return 'bg-red-500';
      case 'sostenibilidad': return 'bg-blue-500';
      case 'cultura': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'fácil': return 'text-green-600 bg-green-50 border-green-200';
      case 'medio': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'difícil': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getProgressPercentage = (progress: number, maxProgress: number) => {
    return Math.min((progress / maxProgress) * 100, 100);
  };

  const currentLevelProgress = userStats.totalPoints % 500;

  return (
    <div className="min-h-screen dashboard" style={{ 
      backgroundImage: `url('/images/background.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header */}
      <div className="h-20 bg-[#0087c7] border-b-4 border-[#291700] shadow-lg">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm"
                className="bg-white/90 hover:bg-white text-[#291700] border-2 border-[#291700] hover:border-black font-bold shadow-lg transition-all duration-200 hover:scale-105 rounded-lg"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#291700] text-shadow-cultural">
              Dashboard Eco Senda
            </h1>
          </div>
        </div>
      </div>

      {/* Spacing for fixed header */}
      <div className="h-20"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Panel de estadísticas del usuario */}
          <div className="lg:col-span-1">
            <Card className="cel-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-[#291700]">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  Tu Progreso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Nivel y puntos */}
                <div className="text-center">
                  <CircularProgress 
                    value={(currentLevelProgress / 500) * 100}
                    size={100}
                    className="mb-4"
                  >
                    <div className="text-center">
                      <div className="level-indicator">
                        {userStats.level}
                      </div>
                    </div>
                  </CircularProgress>
                  
                  <div className="cel-badge inline-flex items-center gap-2 px-4 py-2 mb-4">
                    <Star className="h-5 w-5" />
                    <span className="font-bold">Nivel {userStats.level}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-[#291700] mb-2">
                    {userStats.totalPoints.toLocaleString()} pts
                  </div>
                  
                  <div className="text-sm text-[#291700] opacity-80 mb-2">
                    {500 - currentLevelProgress} pts para nivel {userStats.level + 1}
                  </div>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#291700]">
                      {userStats.challengesCompleted}
                    </div>
                    <div className="text-sm text-[#291700] opacity-80">Retos completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#291700] flex items-center justify-center gap-1">
                      <Flame className="h-5 w-5 text-orange-500" />
                      {userStats.streak}
                    </div>
                    <div className="text-sm text-[#291700] opacity-80">Días seguidos</div>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <div className="font-bold text-[#291700] mb-2">Logros Obtenidos</div>
                  <div className="flex gap-2 flex-wrap">
                    {userStats.badges.map((badge) => (
                      <div key={badge} className="cel-badge text-2xl">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navegación rápida */}
            <Card className="cel-card">
              <CardHeader>
                <CardTitle className="text-lg text-[#291700]">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/chat">
                  <Button className="cel-button w-full justify-start">
                    💬 Chatear con Guía Verde
                  </Button>
                </Link>
                <Link href="/maps">
                  <Button className="cel-button w-full justify-start">
                    🗺️ Explorar Mapa
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Panel de retos */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-[#291700] mb-4">🎯 Retos Disponibles</h2>
              <div className="flex gap-2">
                <Badge className={getDifficultyColor('fácil')}>Fácil</Badge>
                <Badge className={getDifficultyColor('medio')}>Medio</Badge>
                <Badge className={getDifficultyColor('difícil')}>Difícil</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className={`cel-card ${challenge.locked ? 'opacity-60' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{challenge.icon}</div>
                        <div>
                          <CardTitle className="text-lg text-[#291700]">{challenge.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <div className={`w-3 h-3 rounded-full ${getCategoryColor(challenge.category)}`}></div>
                            <Badge className={getDifficultyColor(challenge.difficulty)}>
                              {challenge.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {challenge.locked ? (
                          <Lock className="h-6 w-6 text-gray-400" />
                        ) : challenge.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <div className="cel-badge">
                            +{challenge.points} pts
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-[#291700] opacity-80">{challenge.description}</p>
                    
                    {!challenge.locked && (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-[#291700]">
                            <span>Progreso</span>
                            <span>{challenge.progress}/{challenge.maxProgress}</span>
                          </div>
                          <Progress 
                            value={getProgressPercentage(challenge.progress, challenge.maxProgress)} 
                            className="h-2"
                          />
                        </div>

                        {challenge.reward && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs">
                            <div className="font-bold text-yellow-700">🎁 Recompensa:</div>
                            <div className="text-yellow-600">{challenge.reward}</div>
                          </div>
                        )}

                        <Button 
                          className="cel-button w-full"
                          disabled={challenge.completed}
                        >
                          {challenge.completed ? '✓ Completado' : 'Continuar Reto'}
                        </Button>
                      </>
                    )}

                    {challenge.locked && (
                      <div className="text-center py-4">
                        <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <div className="text-sm text-[#291700] opacity-60">
                          Completa otros retos para desbloquear
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
