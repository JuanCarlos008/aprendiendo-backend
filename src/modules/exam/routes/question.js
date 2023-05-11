import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/question', getQuestions)

router.post('/question', createQuestion)

router.put('/question/:id', updateQuestion)

router.delete('/question/:id', deleteQuestion)
