import Course from '../../../models/course.js'

const get = async (req, res) => {
	try {
		const course = await Course.findAll()

		if (course.length === 0) {
			res.status(404).json({ data: [], message: 'No hay cursos disponibles' })
		}

		return res.status(200).json({ data: course })
	} catch (error) {
		console.log(error)
		return res
			.status(500)
			.json({ data: [], message: 'Error al obtener los cursos' })
	}
}

const getById = async (req, res) => {
	const id = req.params.id

	try {
		const course = await Course.findByPk(id)

		if (!course) {
			return res.status(404).json({ data: {}, message: 'No existe el curso' })
		}

		return res.status(200).json({ data: course })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al obtener el curso' })
	}
}

const create = async (req, res) => {
	const {
		name,
		description,
		cost,
		duration,
		image_url,
		start_date,
		end_date,
		category_id,
		institution_id,
	} = req.body

	try {
		const course = await Course.create({
			name,
			description,
			cost,
			duration,
			image_url,
			start_date,
			end_date,
			category_id,
			institution_id,
		})
		return res.status(201).json({ data: course })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear el curso' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const {
		name,
		description,
		cost,
		duration,
		image_url,
		start_date,
		end_date,
		category_id,
	} = req.body

	try {
		const course = await Course.findByPk(id)

		if (!course) {
			return res.status(400).json({ data: {}, message: 'No existe el curso' })
		}

		await course.update({
			name: name || course.name,
			description: description || course.description,
			cost: cost || course.cost,
			duration: duration || course.duration,
			image_url: image_url || course.image_url,
			start_date: start_date || course.start_date,
			end_date: end_date || course.end_date,
			category_id: category_id || course.category_id,
		})

		return res.status(200).json({ data: course })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al editar el curso' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id

	try {
		const course = await Course.findByPk(id)

		if (!course) {
			return res.status(400).json({ data: {}, message: 'No existe el curso' })
		}

		await course.destroy()

		return res.status(200).json({ data: {}, message: 'Curso eliminado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar el curso' })
	}
}

export default { get, getById, create, edit, remove }
