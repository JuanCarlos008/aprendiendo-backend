import Module from '../../../models/module'

const get = async (req, res) => {
	try {
		const module = await Module.findAll()

		if (!module) {
			return res
				.status(404)
				.json({ data: [], message: 'No se encontraron los modulos' })
		}
		return res.status(200).json({ data: module })
	} catch (error) {
		res.status(500).json({ data: [], message: 'Error al obtener los modulos' })
	}
}

const getById = async (req, res) => {
	const id = req.params.id
	try {
		const module = await Module.findByPk(id)
		if (!module) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró el modulo' })
		}

		return res.status(200).json({ data: module })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al obtener el modulo' })
	}
}

const create = async (req, res) => {
	const { name, description, lesson_id } = req.body

	try {
		const module = await Module.create({ name, description, lesson_id })
		return res.status(201).json({ data: module, message: 'Modulo creado' })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear el modulo' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { name, description, position, duration, course_id } = req.body
	try {
		const courseModule = await Module.findByPk(id)

		if (!courseModule) {
			return res
				.status(400)
				.json({ data: {}, message: 'No se encontró el modulo' })
		}

		await courseModule.update({
			name: name || courseModule.name,
			description: description || courseModule.description,
			position: position || courseModule.position,
			duration: duration || courseModule.duration,
			course_id: course_id || courseModule.course_id,
		})

		return res
			.status(200)
			.json({ data: courseModule, message: 'Modulo editado' })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al editar el modulo' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id
	try {
		const module = await Module.findByPk(id)

		if (!module) {
			return res
				.status(400)
				.json({ data: {}, message: 'No se encontró el modulo' })
		}

		await module.destroy()

		return res.status(200).json({ data: module, message: 'Modulo eliminado' })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al eliminar el modulo' })
	}
}

export { get, getById, create, edit, remove }
