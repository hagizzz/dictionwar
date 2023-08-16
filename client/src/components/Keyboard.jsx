
import React from 'react';
import { useState  } from 'react';
import { useDispatch } from 'react-redux'
import './Keyboard.scss';
import { keyPress } from '../redux/slice';

function Keyboard() {

    const dispatch = useDispatch()
    const keyboardTable = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Delete', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter']
    ]

    function classOfKey(key) {
        if(key === 'Enter' || key === 'Delete') return 'keyboard-btn keyboard-btn-wide'
        else return 'keyboard-btn'
    }

    return (
        <div id="keyboard" >
            <div className='container'>
                {keyboardTable.map((row, rowIndex) => {
                    return <div className='keyboard-row' key={rowIndex}>
                        {row.map(key => {
                            return <div className={classOfKey(key)} key={key} onClick={() => dispatch(keyPress(key))}>
                                { key }
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Keyboard;