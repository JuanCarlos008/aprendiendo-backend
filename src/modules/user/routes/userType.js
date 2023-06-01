import express from 'express'
import userTypeController from '../controller/userType.js'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/', userTypeController.get)

router.get('/:id', userTypeController.getById)

router.put('/:id', userTypeController.edit)

router.post('/', userTypeController.create)

router.delete('/:id', userTypeController.remove)

export default router
