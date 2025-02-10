import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Message from './components/Message';
import LoveLetter from './components/LoveLetter';
import Gallery from './components/Gallery';
import Confetti from './components/Confetti';
import AudioPlayer from './components/AudioPlayer';
import bgImage from './assets/Background.jpg';
import './index.css';

const App = () => {
  const [page, setPage] = useState('home');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleShowMessage = () => setPage('message');
  const handleYes = () => {
    setPage('loveLetter');
    setShowConfetti(true);
  };
  const handleNoHover = () => {
    const noButton = document.getElementById('noButton');
    if (noButton) {
      const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
      const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.position = 'absolute';
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    }
  };
  const handleShowGallery = () => setPage('gallery');

  return (
    <> {/* 🔥 Wrap everything inside a React Fragment */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {page === 'home' && <HomePage onShowMessage={handleShowMessage} />}
        {page === 'message' && <Message onYes={handleYes} onNoHover={handleNoHover} />}
        {page === 'loveLetter' && (
          <>
            <LoveLetter onShowGallery={handleShowGallery} />
            {showConfetti && <Confetti />}
          </>
        )}
        {page === 'gallery' && <Gallery />}
      </div>
      <AudioPlayer />
    </>
  );
};

export default App;
