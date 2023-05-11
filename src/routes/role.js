// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/role', getRoles)

router.post('/role', createRol)

router.put('/role/:id', updateRol)

router.delete('/role/:id', deleteRol)
