// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import HomePage from './components/HomePage';
import Message from './components/Message';
import LoveLetter from './components/LoveLetter';
import Confetti from './components/Confetti';
import Memories from './components/Memories';
import bgImage from './assets/Background.jpg';
import './index.css';

const App = () => {
  const [page, setPage] = useState('home');
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null); // Ref for the audio element

  // Function to handle the "Click Here to Find Out" button click
  const handleShowMessage = () => {
    setPage('message');
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  };

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

  const handleShowGallery = () => {
    setPage('memories');
  };

  // Preload the audio file when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.preload = 'auto'; // Preload the audio
    }
  }, []);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          zIndex: -1,
        }}
      />
      <div className="container">
        {page === 'home' && <HomePage onShowMessage={handleShowMessage} />}
        {page === 'message' && <Message onYes={handleYes} onNoHover={handleNoHover} />}
        {page === 'loveLetter' && (
          <>
            <LoveLetter onShowGallery={handleShowGallery} />
            {showConfetti && <Confetti />}
          </>
        )}
        {page === 'memories' && <Memories />}
      </div>
      {/* Audio element with ref */}
      <audio ref={audioRef} loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default App;
