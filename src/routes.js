import { Router } from 'express'
import userRoutes from './modules/user/routes/index.js'
import courseRoutes from './modules/course/routes/index.js'

const router = Router()

router.use('/user-module', userRoutes)
router.use('/course-module', courseRoutes)
// router.use('/exam-module')

export default router
