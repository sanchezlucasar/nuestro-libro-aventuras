import React from 'react';

interface LandingPageProps {
  onOpenBook: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenBook }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <img 
        src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1920" 
        alt="Fondo fantástico"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      
      <div className="relative z-10 text-center p-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-fantasy mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
          Una Década en el País de las Maravillas
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-semibold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          Celebrando 10 años de amor, risas y aventuras.
        </p>
        <button
          onClick={onOpenBook}
          className="bg-[#D4AF37] text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#EACD6A] transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          Entra a Nuestro Libro de Aventuras
        </button>
      </div>
    </div>
  );
};

export default LandingPage;