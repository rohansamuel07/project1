// src/components/Message.js
import React, { useEffect, useState } from 'react';

const Message = ({ onYes }) => {
  const noMessages = [
    "Try again… I’ll wait 😏",
    "Lies. Your heart says yes ❤️",
    "But I see that little smile 👀",
    "Oops! Button seems broken. Only ‘Yes’ works 🤭",
    "But we both know that’s a joke 😉",
    "Haha, you really thought? 😂",
    "This button is broken, only ‘Yes’ works 😜",
    "Still no? That’s adorable. Try again 😏",
    "Your heart says yes, I can hear it ❤️",
    "Aww, come on! You know you want to 😉",
    "Haha! Good luck resisting this charm 😘",
    "Are you sure? Really sure? Final answer? 😜",
    "I see that hesitation... just say yes! 💕",
    "This button is losing confidence now… 🥺",
    "Fine, I’ll wait… but not forever! 😆",
    "Every time you click, I get a little sad 😢",
    "Alright, you win! …Just kidding, say yes! 🤭",
    "Wait… let’s rethink this 😳",
    "I admire your persistence, but… no 😉",
    "I feel like you don’t mean that 😏",
    "Okay, now you’re just teasing me! 🙈",
    "I’ll pretend I didn’t see that 🤭",
    "If you click again, I’m telling fate! 😂",
    "I’m getting emotional over here 😢",
    "Just say yes, it’s easier! 😆",
    "Deep down, you know the right answer ❤️",
    "This is getting awkward… 😅",
    "Fine, have it your way… for now 😉",
    "Do I need to bribe you? Chocolate? 🍫",
    "You’re making this harder than it needs to be! 🤦‍♂️",
    "Plot twist: ‘No’ actually means ‘Yes’ 😏",
    "Saying no won’t change destiny 💕"
  ];

  const [noIndex, setNoIndex] = useState(-1);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const message = document.querySelector('#message h2');
    message.classList.add('typewriter');
  }, []);

  const handleNoClick = () => {
    setShowMessage(true);
    setNoIndex((prevIndex) => (prevIndex + 1) % noMessages.length);
    setTimeout(() => setShowMessage(false), 2000); // Reset to default after 2 seconds
  };

  return (
    <div id="message">
      <h2>From the moment I met you, something felt different... ✨</h2>
      <p>You light up my world in ways I never knew were possible. Every laugh, every moment, every little thing about you makes life more beautiful.</p>
      <p>You're the reason my heart races, the reason I smile at random, and the one person I never want to stop making memories with.</p>
      <h1>So… will you be my Valentine? ❤️</h1>
      <div className="buttons">
        <button id="yesButton" onClick={onYes}>Yes! A thousand times YES! 💖</button>
        <button id="noButton" onClick={handleNoClick}>
          {showMessage ? noMessages[noIndex] : "No, I don't want to 🙃"}
        </button>
      </div>
    </div>
  );
};

export default Message;
