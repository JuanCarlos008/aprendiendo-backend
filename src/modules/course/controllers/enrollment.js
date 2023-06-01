import Enrollment from '../../../models/enrollment'

const get = async (req, res) => {
	try {
		const enrollment = await Enrollment.findAll()

		if (!enrollment) {
			return res
				.status(404)
				.json({ data: [], message: 'No se encontraron las matriculas' })
		}
		return res.status(200).json({ data: enrollment })
	} catch (error) {
		res
			.status(500)
			.json({ data: [], message: 'Error al obtener las matriculas' })
	}
}

const getById = async (req, res) => {
	const id = req.params.id
	try {
		const enrollment = await Enrollment.findByPk(id)
		if (!enrollment) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró la matricula' })
		}

		return res.status(200).json({ data: enrollment })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al obtener la matricula' })
	}
}

const create = async (req, res) => {
	const { course_id, user_id } = req.body

	try {
		const enrollment = await Enrollment.create({ course_id, user_id })
		return res
			.status(201)
			.json({ data: enrollment, message: 'Matricula creada' })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear la matricula' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { course_id, user_id } = req.body
	try {
		const enrollment = await Enrollment.findByPk(id)

		if (!enrollment) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe la matricula' })
		}

		await enrollment.update({
			course_id,
			user_id,
		})
		return res
			.status(200)
			.json({ data: enrollment, message: 'Matricula actualizada' })
	} catch (error) {
		res
			.status(500)
			.json({ data: {}, message: 'Error al actualizar la matricula' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id
	try {
		const enrollment = await Enrollment.findByPk(id)

		if (!enrollment) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe la matricula' })
		}

		await enrollment.destroy()
		return res.status(200).json({ data: id, message: 'Matricula eliminada' })
	} catch (error) {
		res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar la matricula' })
	}
}

export { get, getById, create, edit, remove }
