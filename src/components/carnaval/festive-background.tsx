export const FestiveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Imagen de fondo cultural - optimizada para uso diurno */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.png')",
          filter: 'brightness(1.2) contrast(1.1) saturate(1.2)',
          opacity: 0.9
        }}
      />
      
      {/* Overlay claro para mejor visibilidad diurna */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.1) 0%, 
          rgba(0, 135, 199, 0.05) 50%, 
          rgba(255, 255, 255, 0.08) 100%)`
      }} />
      
      {/* Sin efectos festivos para mejor visibilidad diurna */}
    </div>
  );
};