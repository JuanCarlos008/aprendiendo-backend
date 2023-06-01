// src/routes/user.js
import express from 'express'
import userController from '../controller/user.js'
import * as authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.get('/', /* authMiddleware.checkAdminRole, */ userController.get)
router.get('/:id', userController.getById)
router.post('/', userController.create)
router.put('/:id', /* authMiddleware.checkAdminRole, */ userController.edit)
router.delete(
	'/:id',
	/* authMiddleware.checkAdminRole, */ userController.remove
)

export default router
