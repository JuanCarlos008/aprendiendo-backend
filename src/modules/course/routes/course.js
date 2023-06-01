import express from 'express'
import courseController from '../controllers/course.js'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/', courseController.get)

router.get('/:id', courseController.getById)

router.post('/', courseController.create)

router.put('/:id', courseController.edit)

router.delete('/:id', courseController.remove)

export default router
