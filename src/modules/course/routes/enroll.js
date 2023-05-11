// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/enroll', getEnrolls)

router.post('/enroll', createEnroll)

router.put('/enroll/:id', updateEnroll)

router.delete('/enroll/:id', deleteEnroll)
