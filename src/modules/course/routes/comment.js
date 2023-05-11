// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/comment', getComments)

router.post('/comment', createComment)

router.put('/comment/:id', updateComment)

router.delete('/comment/:id', deleteComment)
