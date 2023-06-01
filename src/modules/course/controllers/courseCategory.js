import CourseCategory from '../../../models/courseCategory'

const get = async (req, res) => {
	try {
		const courseCategory = await CourseCategory.findAll()

		if (!courseCategory) {
			return res
				.status(404)
				.json({ data: [], message: 'No se encontraron las categorias' })
		}
		return res.status(200).json({ data: courseCategory })
	} catch (error) {
		res
			.status(500)
			.json({ data: [], message: 'Error al obtener las categorias' })
	}
}

const getById = async (req, res) => {
	const id = req.params.id
	try {
		const courseCategory = await CourseCategory.findByPk(id)
		if (!courseCategory) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró la categoria' })
		}

		return res.status(200).json({ data: courseCategory })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al obtener la categoria' })
	}
}

const create = async (req, res) => {
	const { name } = req.body

	try {
		const courseCategory = await CourseCategory.create({ name })
		return res
			.status(201)
			.json({ data: courseCategory, message: 'Categoria creada' })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear la categoria' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { name } = req.body
	try {
		const courseCategory = await CourseCategory.findByPk(id)

		if (!courseCategory) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe la categoria' })
		}

		await courseCategory.update({
			name,
		})
		return res
			.status(200)
			.json({ data: courseCategory, message: 'Categoria editada' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al editar la categoria' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id

	try {
		const courseCategory = await CourseCategory.findByPk(id)

		if (!courseCategory) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe la categoria' })
		}

		await courseCategory.destroy()
		return res
			.status(200)
			.json({ data: courseCategory, message: 'Categoria eliminada' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar la categoria' })
	}
}

export { get, getById, create, edit, remove }
