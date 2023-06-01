import Router from 'express'
import courseRoutes from './course.js'

const router = Router()

router.use('/course', courseRoutes)

export default router
