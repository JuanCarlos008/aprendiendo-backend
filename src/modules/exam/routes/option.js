import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/option', getOptions)

router.post('/option', createOption)

router.put('/option/:id', updateOption)

router.delete('/option/:id', deleteOption)
