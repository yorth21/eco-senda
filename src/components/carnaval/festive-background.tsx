export const FestiveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Imagen de fondo cultural */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.png')",
          filter: 'brightness(0.4) contrast(1.2) saturate(1.3)',
          opacity: 0.6
        }}
      />
      
      {/* Overlay de gradiente cultural para armonía con la paleta */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-800/20 to-teal-700/30" />
      
      {/* Gradientes de acento inspirados en el carnaval */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-red-500/8 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-orange-500/8 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-yellow-400/8 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-purple-500/8 to-transparent" />
      
      {/* Confeti SVG con colores del carnaval */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-15" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Confeti rojo festivo */}
        <circle cx="15" cy="25" r="0.5" fill="#D32F2F" className="animate-float-1">
          <animate attributeName="cy" values="25;22;25" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="85" cy="15" r="0.3" fill="#D32F2F" className="animate-float-2">
          <animate attributeName="cy" values="15;12;15" dur="4s" repeatCount="indefinite" />
        </circle>
        
        {/* Confeti naranja cálido */}
        <rect x="30" y="70" width="1" height="1" fill="#FF7043" className="animate-float-3">
          <animate attributeName="y" values="70;67;70" dur="2.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 30.5 70.5;360 30.5 70.5" dur="8s" repeatCount="indefinite" />
        </rect>
        <rect x="75" y="80" width="0.8" height="0.8" fill="#FF7043" className="animate-float-4">
          <animate attributeName="y" values="80;77;80" dur="3.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 75.4 80.4;360 75.4 80.4" dur="6s" repeatCount="indefinite" />
        </rect>
        
        {/* Confeti amarillo dorado */}
        <polygon points="20,85 21,86 20,87 19,86" fill="#FFC107" className="animate-float-5">
          <animate attributeName="points" values="20,85 21,86 20,87 19,86;20,82 21,83 20,84 19,83;20,85 21,86 20,87 19,86" dur="4s" repeatCount="indefinite" />
        </polygon>
        <polygon points="90,40 91,41 90,42 89,41" fill="#FFC107" className="animate-float-6">
          <animate attributeName="points" values="90,40 91,41 90,42 89,41;90,37 91,38 90,39 89,38;90,40 91,41 90,42 89,41" dur="3s" repeatCount="indefinite" />
        </polygon>
        
        {/* Confeti verde andino */}
        <ellipse cx="60" cy="20" rx="0.4" ry="0.8" fill="#388E3C" className="animate-float-7">
          <animate attributeName="cy" values="20;17;20" dur="3.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 60 20;180 60 20;360 60 20" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="10" cy="60" rx="0.3" ry="0.6" fill="#388E3C" className="animate-float-8">
          <animate attributeName="cy" values="60;57;60" dur="4.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 10 60;180 10 60;360 10 60" dur="7s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Confeti púrpura real */}
        <circle cx="45" cy="75" r="0.4" fill="#7B1FA2" className="animate-float-9">
          <animate attributeName="cy" values="75;72;75" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="25" cy="35" r="0.3" fill="#7B1FA2" className="animate-float-10">
          <animate attributeName="cy" values="35;32;35" dur="4.2s" repeatCount="indefinite" />
        </circle>
        
        {/* Confeti turquesa artesanal */}
        <rect x="65" y="55" width="0.6" height="0.6" fill="#00ACC1" className="animate-float-11">
          <animate attributeName="y" values="55;52;55" dur="3.8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 65.3 55.3;360 65.3 55.3" dur="7s" repeatCount="indefinite" />
        </rect>
      </svg>
      
      {/* Serpentinas culturales */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-8" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path 
          d="M10,5 Q15,10 20,5 T30,5 T40,5" 
          stroke="#D32F2F" 
          strokeWidth="0.3" 
          fill="none"
          className="animate-wiggle-1"
        />
        <path 
          d="M70,95 Q75,90 80,95 T90,95 T100,95" 
          stroke="#FF7043" 
          strokeWidth="0.3" 
          fill="none"
          className="animate-wiggle-2"
        />
        <path 
          d="M0,50 Q5,45 10,50 T20,50 T30,50" 
          stroke="#FFC107" 
          strokeWidth="0.3" 
          fill="none"
          className="animate-wiggle-3"
        />
        <path 
          d="M70,25 Q75,20 80,25 T90,25 T100,25" 
          stroke="#388E3C" 
          strokeWidth="0.3" 
          fill="none"
          className="animate-wiggle-4"
        />
        <path 
          d="M40,80 Q45,75 50,80 T60,80 T70,80" 
          stroke="#7B1FA2" 
          strokeWidth="0.3" 
          fill="none"
          className="animate-wiggle-5"
        />
      </svg>
      
      {/* Overlay sutil para mejor legibilidad del contenido */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
};