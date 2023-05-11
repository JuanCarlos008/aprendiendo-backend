// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/job-application', getJobApplications)

router.post('/job-application', createJobApplication)

router.put('/job-application/:id', updateJobApplication)

router.delete('/job-application/:id', deleteJobApplication)
