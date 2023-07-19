
import React, { useEffect, useState} from 'react';
import './WordleGame.scss';

const numColumn = 5
const numRow = 6

const words = ['table', 'chair']

function WordleGame() {
    const [wordTable, setWordTable] = useState([])

    useEffect(() => {
        // initialize wordTable as matrix
        let table = []
        for (let i = 0; i < numRow; i++) {
            let row = []
            for (let j = 0; j < numColumn; j++) {
                row.push('')
            }
            table.push(row)
        }
        setWordTable(table)
        document.addEventListener("keydown", handleKeyPress)
        
    }, [])

   

    function handleKeyPress(e) {
        setWordTable(wordTable => {
            let table = [...wordTable]
            let string = []
            // check if key is letter
            if (e.keyCode > 64 && e.keyCode < 91) {
                for (let i = 0; i < numColumn; i++) {
                    if (wordTable[0][i] === '') {
                        table[0][i] = e.key
                        string.push(table[0][i])
                        break
                    }
                    string.push(table[0][i])
                }
            // check if key is backspace
            } else if (e.key === 'Backspace') {
                for (let i = numColumn - 1; i >= 0; i--) {
                    if (wordTable[0][i] !== '') {
                        table[0][i] = ''
                        break
                    }
                }
            }
            console.log(table)
            console.log(string.join(""))

            return table
        })
        
    }

   
    
    return (
        <div className="game-rows">
            {wordTable.map((row, i) => {
                return <div className='row' key={i}>
                    {row.map((cell, j) => <div className='row-letter' key={j}>
                        {cell}
                    </div>)}
                </div>
            })}
        </div>
    )
}

export default WordleGame;