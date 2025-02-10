import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Message from './components/Message';
import LoveLetter from './components/LoveLetter';
import Gallery from './components/Gallery';
import Confetti from './components/Confetti';
import AudioPlayer from './components/AudioPlayer';
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
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };
  const handleShowGallery = () => setPage('gallery');

  return (
    <div className="background">
      <div className="container">
        {page === 'home' && <HomePage onShowMessage={handleShowMessage} />}
        {page === 'message' && (
          <Message onYes={handleYes} onNoHover={handleNoHover} />
        )}
        {page === 'loveLetter' && (
          <>
            <LoveLetter onShowGallery={handleShowGallery} />
            {showConfetti && <Confetti />}
          </>
        )}
        {page === 'gallery' && <Gallery />}
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;