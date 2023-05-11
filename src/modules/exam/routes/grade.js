// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/grade', getGrades)

router.post('/grade', createGrade)

router.put('/grade/:id', updateGrade)

router.delete('/grade/:id', deleteGrade)
