// src/routes/user.js
import express from 'express'
import userController from '../controllers/user.js'
import * as authMiddleware from '../middlewares/auth.js'

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', authMiddleware.checkAdminRole, userController.getUsers)
router.put('/:id', authMiddleware.checkAdminRole, userController.updateUser)
router.delete('/:id', authMiddleware.checkAdminRole, userController.deleteUser)

export default router
