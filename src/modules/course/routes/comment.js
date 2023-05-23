import express from 'express'
import * as commentController from '../controllers/comment.js'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/', commentController.get)

router.get('/:id', commentController.getByID)

router.post('/', commentController.create)

router.put('/:id', commentController.put)

router.delete('/:id', commentController.deleteC)

export default router
