import React from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import ControlPanel from './ControlPanel';

function SnakeGame() {
    return (
        <div className="snake-game-container">
            <ScoreBoard />
            <GameBoard />
            <ControlPanel />
        </div>
    );
}

export default SnakeGame;
