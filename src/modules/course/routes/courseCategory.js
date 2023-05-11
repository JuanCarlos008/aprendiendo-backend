import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/course-categories', getCourseCategories)

router.post('/course-categories', createCourseCategory)

router.put('/course-categories/:id', updateCourseCategory)

router.delete('/course-categories/:id', deleteCourseCategory)
