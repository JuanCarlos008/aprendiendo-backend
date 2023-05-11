import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/answer', getAnswer)

router.post('/answer', createAnswer)

router.put('/answer/:id', updateAnswer)

router.delete('/answer/:id', deleteAnswer)
