import React from 'react';

function ScoreBoard({ currentScore, highScore }) {
    return (
        <div className="score-board">
            <div>Current Score: {currentScore}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}

export default ScoreBoard;
