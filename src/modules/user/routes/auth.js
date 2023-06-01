// src/routes/auth.js
import express from 'express'
import authController from '../controller/auth.js'

const router = express.Router()

router.post('/login', authController.login)
router.post('/validate-password', authController.validatePassword)

export default router
