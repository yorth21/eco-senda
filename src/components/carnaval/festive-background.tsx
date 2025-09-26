export const FestiveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradiente base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Gradientes de color */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-emerald-500/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-fuchsia-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-yellow-400/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-teal-500/5 to-transparent" />
      
      {/* Confeti SVG */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Confeti emerald */}
        <circle cx="15" cy="25" r="0.5" fill="rgb(16 185 129)" className="animate-float-1">
          <animate attributeName="cy" values="25;22;25" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="85" cy="15" r="0.3" fill="rgb(16 185 129)" className="animate-float-2">
          <animate attributeName="cy" values="15;12;15" dur="4s" repeatCount="indefinite" />
        </circle>
        
        {/* Confeti fuchsia */}
        <rect x="30" y="70" width="1" height="1" fill="rgb(217 70 239)" className="animate-float-3">
          <animate attributeName="y" values="70;67;70" dur="2.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 30.5 70.5;360 30.5 70.5" dur="8s" repeatCount="indefinite" />
        </rect>
        <rect x="75" y="80" width="0.8" height="0.8" fill="rgb(217 70 239)" className="animate-float-4">
          <animate attributeName="y" values="80;77;80" dur="3.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 75.4 80.4;360 75.4 80.4" dur="6s" repeatCount="indefinite" />
        </rect>
        
        {/* Confeti yellow */}
        <polygon points="20,85 21,86 20,87 19,86" fill="rgb(250 204 21)" className="animate-float-5">
          <animate attributeName="points" values="20,85 21,86 20,87 19,86;20,82 21,83 20,84 19,83;20,85 21,86 20,87 19,86" dur="4s" repeatCount="indefinite" />
        </polygon>
        <polygon points="90,40 91,41 90,42 89,41" fill="rgb(250 204 21)" className="animate-float-6">
          <animate attributeName="points" values="90,40 91,41 90,42 89,41;90,37 91,38 90,39 89,38;90,40 91,41 90,42 89,41" dur="3s" repeatCount="indefinite" />
        </polygon>
        
        {/* Confeti teal */}
        <ellipse cx="60" cy="20" rx="0.4" ry="0.8" fill="rgb(20 184 166)" className="animate-float-7">
          <animate attributeName="cy" values="20;17;20" dur="3.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 60 20;180 60 20;360 60 20" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="10" cy="60" rx="0.3" ry="0.6" fill="rgb(20 184 166)" className="animate-float-8">
          <animate attributeName="cy" values="60;57;60" dur="4.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" values="0 10 60;180 10 60;360 10 60" dur="7s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      
      {/* Serpentinas */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-5" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path 
          d="M10,5 Q15,10 20,5 T30,5 T40,5" 
          stroke="rgb(16 185 129)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-wiggle-1"
        />
        <path 
          d="M70,95 Q75,90 80,95 T90,95 T100,95" 
          stroke="rgb(217 70 239)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-wiggle-2"
        />
        <path 
          d="M0,50 Q5,45 10,50 T20,50 T30,50" 
          stroke="rgb(250 204 21)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-wiggle-3"
        />
        <path 
          d="M70,25 Q75,20 80,25 T90,25 T100,25" 
          stroke="rgb(20 184 166)" 
          strokeWidth="0.2" 
          fill="none"
          className="animate-wiggle-4"
        />
      </svg>
    </div>
  );
};
