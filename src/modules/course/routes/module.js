// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/module', getModules)

router.post('/module', createModule)

router.put('/module/:id', updateModule)

router.delete('/module/:id', deleteModule)
