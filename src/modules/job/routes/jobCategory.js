// Create a router
const router = express.Router()

// Register the routes with the router
router.get('/categorias_de_empleo', getCategoriasDeEmpleo)

router.post('/categorias_de_empleo', createCategoriaDeEmpleo)

router.put('/categorias_de_empleo/:id', updateCategoriaDeEmpleo)

router.delete('/categorias_de_empleo/:id', deleteCategoriaDeEmpleo)
