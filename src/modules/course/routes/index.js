import express from 'express'
import courseRouters from './course.js'
import moduleRouters from './module.js'
import lessonRouters from './lesson.js'
import commentRouters from './comment.js'
import enrollRouters from './enroll.js'
import courseCcategoryRouters from './courseCategory.js'

const router = express.Router()

router.use('/', courseRouters)
router.use('/module', moduleRouters)
router.use('/lesson', lessonRouters)
router.use('/comment', commentRouters)
router.use('/enroll', enrollRouters)
router.use('/courseCategory', courseCcategoryRouters)

export default router
