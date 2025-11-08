import React, { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import AdventureBook from './components/AdventureBook';

const App: React.FC = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);

  const handleOpenBook = useCallback(() => {
    setIsBookOpen(true);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F0EAD6] antialiased">
      {!isBookOpen ? (
        <LandingPage onOpenBook={handleOpenBook} />
      ) : (
        <AdventureBook />
      )}
    </div>
  );
};

export default App;