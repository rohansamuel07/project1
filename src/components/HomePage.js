// src/components/HomePage.js
import React from 'react';

const HomePage = ({ onShowMessage }) => {
  return (
    <div id="homepage">
      <h1>Hey Alena,</h1>
      <p>I have something special for you...</p>
      <button onClick={onShowMessage}>Click Here to Find Out!</button>
    </div>
  );
};

export default HomePage;