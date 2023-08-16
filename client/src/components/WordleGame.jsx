
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { keyPress, fetchRandomWord } from '../redux/slice';

import './WordleGame.scss';

function WordleGame() {
    const dispatch = useDispatch()
    const wordTable = useSelector(state => state.wordStore.wordTable)
    //const errorMessage = useSelector(state => state.wordStore.errorMessage)

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        dispatch(fetchRandomWord())
    }, [])


    function handleKeyPress(e) {
        dispatch(keyPress(e.key))
    }

    function cellClass (status) {
        if (status === 0) {
            return 'row-letter default-cell'
        } 
        else if (status === 1) {
            return 'row-letter green-cell'
        }
        else if (status === 2) {
            return 'row-letter yellow-cell'
        }
        else if (status === 3) {
            return 'row-letter gray-cell'
        }
    }

    return (
        <div>
            <div className="game-rows">
                {wordTable.map((row, i) => {
                    return <div className='row' key={i}>
                        {row.map((cell, j) => <div className={cellClass(cell.status)} key={j}>
                            {cell.word}
                        </div>)}
                    </div>
                })}
            </div>
        </div>
    )
}

export default WordleGame;