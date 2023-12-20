import React, { useState, useEffect } from 'react';

function SoundManager({ soundEnabled }) {
  
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Initialize audio elements
  const gameOverSound = new Audio('audio/game-over.mp3');
  const gameStartSound = new Audio('audio/game-start.mp3');
  const snakeTurnSound = new Audio('audio/snake-turn.mp3');
  const snakeEatAppleSound = new Audio('audio/snake-eat-apple.mp3');

  // Set volume for gameStartSound
  gameStartSound.volume = 0.35;

  // Function to play a sound
  const playSound = (audio) => {
    if (soundEnabled) {
      setIsPlayingSound(true);
      audio.play();
    }
  };

  // useEffect to handle sound effects
  useEffect(() => {
    // When a sound effect finishes playing, reset isPlayingSound to false
    const handleSoundEnd = () => {
      setIsPlayingSound(false);
    };

    // Add event listeners to audio elements for handling sound ends
    gameOverSound.addEventListener('ended', handleSoundEnd);
    gameStartSound.addEventListener('ended', handleSoundEnd);
    snakeTurnSound.addEventListener('ended', handleSoundEnd);
    snakeEatAppleSound.addEventListener('ended', handleSoundEnd);

    // Clean up event listeners when component unmounts
    return () => {
      gameOverSound.removeEventListener('ended', handleSoundEnd);
      gameStartSound.removeEventListener('ended', handleSoundEnd);
      snakeTurnSound.removeEventListener('ended', handleSoundEnd);
      snakeEatAppleSound.removeEventListener('ended', handleSoundEnd);
    };
  }, []);

  
  return null;
}

export default SoundManager;
