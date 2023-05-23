import express from 'express'

// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/', getModules)

router.get('/:id', getModules)

router.post('/', createModule)

router.put('/:id', updateModule)

router.delete('/:id', deleteModule)

export default router
