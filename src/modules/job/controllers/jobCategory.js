const CategoriasDeEmpleo = require('./models/categorias_de_empleo')

const getCategoriasDeEmpleo = async (req, res) => {
	try {
		const categorias_de_empleo = await CategoriasDeEmpleo.findAll()
		res.json(categorias_de_empleo)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createCategoriaDeEmpleo = async (req, res) => {
	const categoria_de_empleo = new CategoriaDeEmpleo(req.body)
	try {
		await categoria_de_empleo.save()
		res.json(categoria_de_empleo)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateCategoriaDeEmpleo = async (req, res) => {
	const categoria_de_empleo = await CategoriasDeEmpleo.findById(req.params.id)
	try {
		categoria_de_empleo.fill(req.body)
		await categoria_de_empleo.save()
		res.json(categoria_de_empleo)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteCategoriaDeEmpleo = async (req, res) => {
	try {
		await CategoriasDeEmpleo.destroyById(req.params.id)
		res.json({ message: 'Categoria de empleo eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}
