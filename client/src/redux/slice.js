import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const numColumn = 5
const numRow = 6

const INITIAL_STATE = {
    wordTable:
        Array(numRow)
            .fill(0)
            .map(each => Array(numColumn)
                .fill(0)
                .map(_ => ({ word: '', status: 0 })
            )),
    keyboardTable: 
        [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['Delete', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter']
        ].map(row => {
            return row.map(letter => {
                return {
                    key: letter,
                    status: 0,
                }
            })
        }),
    currentRow: 0,
    errorMessage: '',
    randomWord: ''
}


const joinRow = (wordTable, currentRow) => {
    let string = ''
    wordTable[currentRow].forEach(element => {
        string += element.word
    })
    return string
}

export const fetchRandomWord = createAsyncThunk(
    'words/fetchRandomWord',
    async (_, thunkAPI) => {
        const { dispatch } = thunkAPI
        const { setRandomWord } = wordTableSlice.actions
        const res = await axios.get('http://localhost:3000/words/random')
        const randomWord = res.data.data.value
        console.log(randomWord)
        dispatch(setRandomWord(randomWord))
    }
)

export const keyPress = createAsyncThunk(
    'words/keyPress',
    async (key, thunkAPI) => {
        const { dispatch } = thunkAPI
        const { addWord, incrementCurrentRow, setStatus } = wordTableSlice.actions
        let { wordTable, currentRow } = thunkAPI.getState().wordStore
        wordTable = JSON.parse(JSON.stringify(wordTable))
        let { randomWord } = thunkAPI.getState().wordStore
        dispatch(addWord(key))

        try {
            if (key === 'Enter') {
                const string = joinRow(wordTable, currentRow)
                const res = await axios.get(`http://localhost:3000/words/${string}`)
                
                if (res.data.code !== 200) {
                    return console.log('Not found')
                }

                wordTable[currentRow].forEach((element, index) => {
                    let letter = wordTable[currentRow][index].word

                    if (letter === randomWord[index]) {
                        wordTable[currentRow][index].status = 3
                        dispatch(setStatus({
                            index: index,
                            value: 3,
                            letter: letter,
                        }))
                        randomWord = randomWord.slice(0, index) + '@' + randomWord.slice(index + 1, randomWord.length)
                    }
                })

                wordTable[currentRow].forEach((element, index) => {
                    if (wordTable[currentRow][index].status === 3) return;

                    let letter = wordTable[currentRow][index].word
                    let foundIndex = randomWord.indexOf(letter)

                    if (foundIndex !== -1) {
                        dispatch(setStatus({
                            index: index,
                            value: 2,
                            letter: letter,
                        }))
                        randomWord = randomWord.slice(0, foundIndex) + '@' + randomWord.slice(foundIndex + 1, randomWord.length)
                    }
                    else if (!randomWord.includes(letter)) {
                        dispatch(setStatus({
                            index: index,
                            value: 1,
                            letter: letter
                        }))
                    }
                })
                dispatch(incrementCurrentRow())
            }
        } catch(err) {
            console.log(err)
        }
    }
)

const wordTableSlice = createSlice({
    name: 'word',
    initialState: INITIAL_STATE,
    reducers: {
        addWord: (state, action) => {
            let { wordTable, currentRow } = state
            const key = action.payload.toLowerCase()

            // check if key is letter
            if (key >= 'a' && key <= 'z' && key.length === 1) {
                for (let i = 0; i < numColumn; i++) {
                    if (wordTable[currentRow][i].word === '') {
                        wordTable[currentRow][i] = {word: key, status: 0}
                        break
                    }
                }
            // check if key is backspace
            }
            else if (key === 'backspace' || key === 'delete') {
                for (let i = numColumn - 1; i >= 0; i--) {
                    if (wordTable[currentRow][i].word !== '') {
                        wordTable[currentRow][i] = {word: '', status: 0}
                        break
                    }
                }
            }
            else if (key === 'enter') {
                const string = joinRow(wordTable, currentRow)
                console.log('Submit word:', string)
            }
        },
        incrementCurrentRow: (state, action) => {
            state.currentRow++
        },
        setRandomWord: (state, action) => {
            state.randomWord = action.payload
        },
        setStatus: (state, action) => {
            const index = action.payload.index
            const value = action.payload.value
            const letter = action.payload.letter
            state.wordTable[state.currentRow][index].status = value
            for(let i = 0; i < state.keyboardTable.length; i++) {
                for (let j = 0; j < state.keyboardTable[i].length; j++) {
                    let cell = state.keyboardTable[i][j]
                    if (cell.key === letter && cell.status < value) {
                        state.keyboardTable[i][j].status = value
                    }
                        
                }
            }
        },
        
    }
})

export default wordTableSlice
