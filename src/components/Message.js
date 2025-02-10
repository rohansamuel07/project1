import React from 'react';

const Message = ({ onYes, onNoHover }) => {
  return (
    <div id="message">
      <h2>From the moment I met you,</h2>
      <p>I knew there was something special about you. You make me laugh, you inspire me, and you make every day brighter.</p>
      <p>So, I have one question for you...</p>
      <h1>Will you be my Galentine? ❤️</h1>
      <div className="buttons">
        <button id="yesButton" onClick={onYes}>Yes!</button>
        <button id="noButton" onMouseOver={onNoHover}>No</button>
      </div>
    </div>
  );
};

export default Message;