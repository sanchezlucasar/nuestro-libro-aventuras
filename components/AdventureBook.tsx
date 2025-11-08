import React, { useState } from 'react';
import { PAGES } from '../constants';
import Page from './Page';

const AdventureBook: React.FC = () => {
  // Representa el número de hojas que están actualmente en el lado izquierdo del libro.
  const [flippedSheetsCount, setFlippedSheetsCount] = useState(0);

  // Cada "hoja" de papel tiene un anverso y un reverso.
  const totalSheets = Math.ceil(PAGES.length / 2);

  const handleNext = () => {
    setFlippedSheetsCount((prev) => Math.min(prev + 1, totalSheets));
  };

  const handlePrev = () => {
    setFlippedSheetsCount((prev) => Math.max(prev - 1, 0));
  };
  
  // El libro se considera al principio cuando no hay hojas volteadas (mostrando la portada).
  const isAtStart = flippedSheetsCount === 0;
  // El libro está al final cuando todas las hojas han sido volteadas.
  const isAtEnd = flippedSheetsCount === totalSheets;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 book-container">
      <div className="relative w-full max-w-6xl aspect-[2/1] book">
        {/* Lado izquierdo estático (interior de la portada) */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F0EAD6] shadow-lg"></div>

        {/* Las páginas que se voltean */}
        {Array.from({ length: totalSheets }).map((_, index) => {
          const isFlipped = index < flippedSheetsCount;
          
          // El z-index es crucial. Las páginas volteadas (izquierda) deben apilarse
          // con la más reciente encima (índice mayor, z-index mayor).
          // Las páginas no volteadas (derecha) se apilan al revés, con la de encima
          // teniendo el z-index más alto (índice menor, z-index mayor).
          const zIndex = isFlipped ? index + 1 : totalSheets - index;

          const frontPageContent = PAGES[index * 2];
          const backPageContent = PAGES[index * 2 + 1] || null;

          return (
            <div
              key={index}
              className={`page-flip ${isFlipped ? 'flipped' : ''}`}
              style={{ zIndex: zIndex }}
            >
              <div className="page-front bg-[#F0EAD6]">
                <Page page={frontPageContent} />
              </div>
              <div className="page-back bg-[#F0EAD6]">
                <Page page={backPageContent} />
              </div>
            </div>
          );
        })}
        
        {/* Lado derecho estático (interior de la contraportada) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0EAD6] shadow-lg"></div>

        {/* Botones de navegación */}
        {!isAtStart && (
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-[-20px] md:left-[-50px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-50 hover:bg-gray-200 transition"
            aria-label="Página anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {!isAtEnd && (
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-[-20px] md:right-[-50px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-50 hover:bg-gray-200 transition"
            aria-label="Siguiente página"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AdventureBook;