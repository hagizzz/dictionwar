
import React from 'react';
import { useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './Keyboard.scss';
import { keyPress } from '../redux/slice';

function Keyboard() {

    const dispatch = useDispatch()
    const keyboardTable = useSelector(state => state.wordStore.keyboardTable)

    function classOfKey(key) {
        if(key === 'Enter' || key === 'Delete') return 'keyboard-btn keyboard-btn-wide'
        else return 'keyboard-btn'
    }

    function cellClass (status) {
        if (status === 1) {
            return 'gray-cell'
        }
        else if (status === 2) {
            return 'yellow-cell'
        }
        else if (status === 3) {
            return 'green-cell'
        }
    }


    return (
        <div id="keyboard" >
            <div className='container'>
                {keyboardTable.map((row, rowIndex) => {
                    return <div className='keyboard-row' key={rowIndex}>
                        {row.map(cell => {
                            return <div className={classOfKey(cell.key) + ' ' + cellClass(cell.status)} key={cell.key} onClick={() => dispatch(keyPress(cell.key))}>
                                { cell.key }
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Keyboard;