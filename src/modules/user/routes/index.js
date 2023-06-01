import Router from 'express'
import userRoutes from './user.js'
import authRoutes from './auth.js'
import userTypeRoutes from './userType.js'

const router = Router()

router.use('/user', userRoutes)
router.use('/auth', authRoutes)
router.use('/user-type', userTypeRoutes)

export default router
