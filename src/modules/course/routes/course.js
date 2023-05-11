// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/course', getCourses)

router.post('/course', createCourse)

router.put('/course/:id', updateCourse)

router.delete('/courses/:id', deleteCourse)
