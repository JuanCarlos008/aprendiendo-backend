// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/lesson', getLessons)

router.post('/lesson', createLesson)

router.put('/lesson/:id', updateLesson)

router.delete('/lesson/:id', deleteLesson)
