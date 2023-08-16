
import React, { useEffect } from 'react';
import Keyboard from '../components/Keyboard';
import WordleGame from '../components/WordleGame';
import './Solo.scss';

function Solo() {
    return (
        <div className="game-wrapper">  
            <h1>Wordle game</h1>  
            <WordleGame/>
            <Keyboard/>
        </div>
    )
}

export default Solo;