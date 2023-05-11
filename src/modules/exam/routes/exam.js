import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/exam', getExams)

router.post('/exam', createExam)

router.put('/exam/:id', updateExam)

router.delete('/exam/:id', deleteExam)
