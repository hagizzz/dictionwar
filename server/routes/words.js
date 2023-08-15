import express from 'express'
import { DataResponse, NotFoundResponse } from '../common/reponses.js'
import Word from '../models/Word.js'

const router = express.Router()

router.get('/random', async (req, res) => {
    const wordCount = await Word.count()
    const wordId = Math.floor(Math.random()*wordCount)
    const word = await Word.findByPk(wordId)
    res.json(DataResponse(word))
})

router.get('/:value', async (req, res) => {
    const value = req.params.value
    const word = await Word.findOne({
        where: {value}
    })
    if (word) {
        res.json(DataResponse(word))
    }
    else res.json(NotFoundResponse())
})

export default router
