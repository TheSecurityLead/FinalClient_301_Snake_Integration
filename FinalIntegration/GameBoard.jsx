import React, { useRef, useEffect } from 'react';

function GameBoard({ snake, food, onGameUpdate }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the snake
        snake.forEach(segment => {
            ctx.fillStyle = 'green';
            ctx.fillRect(segment.x, segment.y, 10, 10); // Adjust size as needed
        });

        // Draw the food
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, 10, 10); // Adjust size as needed

        // Any additional drawing logic goes here
    }, [snake, food]);

    return (
        <canvas
            ref={canvasRef}
            width={600} // Adjust size as needed
            height={400} // Adjust size as needed
            style={{ border: '1px solid black' }}
        />
    );
}

export default GameBoard;
