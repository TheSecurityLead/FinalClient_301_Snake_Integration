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
  const getRandomFoodPosition = () => {
        const newFood = {
            x: Math.floor(Math.random() * (canvasSize / boxSize)),
            y: Math.floor(Math.random() * (canvasSize / boxSize)),
        };
        return newFood;
    };
    // Game control functions
const startGame = () => {
    setIsGameActive(true);

    // Initialize snake and food positions
    const initialSnake = [{ x: 10, y: 10 }]; // You can change the initial position
    const initialFood = getRandomFoodPosition(); // Implement this function

    setSnake(initialSnake);
    setFood(initialFood);
    setCurrentScore(0); // Initialize the score

    // Set up game loop interval
    const gameLoopInterval = setInterval(() => {
        // Update snake's position based on the current direction
        const newSnakeHead = { ...snake[0] };
        switch (direction) {
            case 'up':
                newSnakeHead.y -= 1;
                break;
            case 'down':
                newSnakeHead.y += 1;
                break;
            case 'left':
                newSnakeHead.x -= 1;
                break;
            case 'right':
                newSnakeHead.x += 1;
                break;
            default:
                break;
        }

        // Check for collisions with food
        if (newSnakeHead.x === food.x && newSnakeHead.y === food.y) {
            // Snake eats the food
            const newSnake = [newSnakeHead, ...snake];
            const newFood = getRandomFoodPosition();
            setCurrentScore(currentScore + 1); // Increase the score
            setSnake(newSnake);
            setFood(newFood);
        } else {
            // Move the snake by adding the new head and removing the tail
            const newSnake = [newSnakeHead, ...snake.slice(0, -1)];
            setSnake(newSnake);
        }

        // Check for collisions with walls
        if (
            newSnakeHead.x < 0 ||
            newSnakeHead.x >= canvasSize / boxSize ||
            newSnakeHead.y < 0 ||
            newSnakeHead.y >= canvasSize / boxSize
        ) {
            handleGameOver();
        }

        // Check for collisions with itself
        if (newSnake.some((segment, index) => index !== 0 && segment.x === newSnakeHead.x && segment.y === newSnakeHead.y)) {
            handleGameOver();
        }
    }, 100); // Adjust the interval as needed for your game speed

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
      {/* Include the SoundManager component */}
      <SoundManager soundEnabled={soundEnabled} />
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <GameBoard snake={snake} food={food} />
      <ControlPanel
        onStart={startGame}
        onPause={pauseGame}
        onReset={resetGame}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        soundEnabled={soundEnabled}
      />
    </div>
        <div>
            <ScoreBoard currentScore={currentScore} highScore={highScore} />
            <GameBoard snake={snake} food={food} />
            <ControlPanel onStart={startGame} onPause={pauseGame} onReset={resetGame} />
        </div>
    );
}

export default SnakeGame;
