
import React from 'react';
import { useState  } from 'react';
import './Keyboard.scss';

function Keyboard() {

    function clickHandler(event) {
        const letterBlocks = document.querySelector('.row-letter')
        for (let i = 0; i < 5; i++) {
            if (letterBlocks[i].innerText === '') {
                letterBlocks[i].innerText = event.key
                break
            }
        }
    }

    function deleteHandler() {
        
    }

    function enterHandler(event) {
        
    }

    return (
        <div id="keyboard" >
            <div className="container">
                <div className="keyboard-row">
                    <div className="keyboard-btn" onClick={clickHandler}>q</div>
                    <div className="keyboard-btn" onClick={clickHandler}>w</div>
                    <div className="keyboard-btn" onClick={clickHandler}>e</div>
                    <div className="keyboard-btn" onClick={clickHandler}>r</div>
                    <div className="keyboard-btn" onClick={clickHandler}>t</div>
                    <div className="keyboard-btn" onClick={clickHandler}>y</div>
                    <div className="keyboard-btn" onClick={clickHandler}>u</div>
                    <div className="keyboard-btn" onClick={clickHandler}>i</div>
                    <div className="keyboard-btn" onClick={clickHandler}>o</div>
                    <div className="keyboard-btn" onClick={clickHandler}>p</div>
                </div>

                <div className="keyboard-row">
                    <div className="keyboard-btn" onClick={clickHandler}>a</div>
                    <div className="keyboard-btn" onClick={clickHandler}>s</div>
                    <div className="keyboard-btn" onClick={clickHandler}>d</div>
                    <div className="keyboard-btn" onClick={clickHandler}>f</div>
                    <div className="keyboard-btn" onClick={clickHandler}>g</div>
                    <div className="keyboard-btn" onClick={clickHandler}>h</div>
                    <div className="keyboard-btn" onClick={clickHandler}>j</div>
                    <div className="keyboard-btn" onClick={clickHandler}>k</div>
                    <div className="keyboard-btn" onClick={clickHandler}>l</div>
                </div>

                <div className="keyboard-row">
                    <div className="keyboard-btn keyboard-btn-wide" onClick={deleteHandler}>delete</div>
                    <div className="keyboard-btn" onClick={clickHandler}>z</div>
                    <div className="keyboard-btn" onClick={clickHandler}>x</div>
                    <div className="keyboard-btn" onClick={clickHandler}>c</div>
                    <div className="keyboard-btn" onClick={clickHandler}>v</div>
                    <div className="keyboard-btn" onClick={clickHandler}>b</div>
                    <div className="keyboard-btn" onClick={clickHandler}>n</div>
                    <div className="keyboard-btn" onClick={clickHandler}>m</div>
                    <div className="keyboard-btn keyboard-btn-wide" onClick={enterHandler}>enter</div>
                </div>
            
            </div>
        </div>
    )
}

export default Keyboard;