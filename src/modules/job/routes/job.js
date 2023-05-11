import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/job', getJobs)

router.post('/job', createJob)

router.put('/job/:id', updateJob)

router.delete('/job/:id', deleteJob)
