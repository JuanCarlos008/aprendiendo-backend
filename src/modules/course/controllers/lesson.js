import Lesson from '../../../models/lesson'

const get = async (req, res) => {
	try {
		const lesson = await Lesson.findAll()

		if (!lesson) {
			return res
				.status(404)
				.json({ data: [], message: 'No se encontraron las lecciones' })
		}
		return res.status(200).json({ data: lesson })
	} catch (error) {
		res
			.status(500)
			.json({ data: [], message: 'Error al obtener las lecciones' })
	}
}

const getById = async (req, res) => {
	const id = req.params.id
	try {
		const lesson = await Lesson.findByPk(id)
		if (!lesson) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró la leccion' })
		}

		return res.status(200).json({ data: lesson })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al obtener la leccion' })
	}
}

const create = async (req, res) => {
	const { name, description, course_id } = req.body

	try {
		const lesson = await Lesson.create({ name, description, course_id })
		return res.status(201).json({ data: lesson, message: 'Leccion creada' })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear la leccion' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { name, description, course_id } = req.body
	try {
		const lesson = await Lesson.findByPk(id)

		if (!lesson) {
			return res
				.status(400)
				.json({ data: {}, message: 'No se encontró la leccion' })
		}

		await lesson.update({ name, description, course_id })

		return res
			.status(200)
			.json({ data: lesson, message: 'Leccion actualizada' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al actualizar la leccion' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id
	try {
		const lesson = await Lesson.findByPk(id)

		if (!lesson) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró la leccion' })
		}

		await lesson.destroy()

		return res.status(200).json({ data: id, message: 'Leccion eliminada' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar la leccion' })
	}
}

export { get, getById, create, edit, remove }
