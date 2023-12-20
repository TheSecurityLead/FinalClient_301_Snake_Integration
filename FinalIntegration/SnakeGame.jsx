import React, { useState } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import ControlPanel from './ControlPanel';

function SnakeGame() {
    // State variables
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // Example initial state
    const [food, setFood] = useState({ x: 20, y: 20 }); // Example initial state
    const [isGameActive, setIsGameActive] = useState(false);

    // Game control functions
    const startGame = () => {
        setIsGameActive(true);
        // Add logic to start the game
    };

    const pauseGame = () => {
        setIsGameActive(false);
        // Add logic to pause the game
    };

    const resetGame = () => {
        setIsGameActive(false);
        setCurrentScore(0);
        // Add logic to reset the game
    };

    return (
        <div>
            <ScoreBoard currentScore={currentScore} highScore={highScore} />
            <GameBoard snake={snake} food={food} />
            <ControlPanel onStart={startGame} onPause={pauseGame} onReset={resetGame} />
        </div>
    );
}

export default SnakeGame;
