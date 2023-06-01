import Skill from '../../../models/skill'

//listo
const get = async (req, res) => {
	try {
		const skill = await Skill.findAll()

		if (!skill) {
			return res
				.status(404)
				.json({ data: [], message: 'No se encontraron las habilidades' })
		}
		return res.status(200).json({ data: skill })
	} catch (error) {
		res
			.status(500)
			.json({ data: [], message: 'Error al obtener las habilidades' })
	}
}

//listo
const getById = async (req, res) => {
	const id = req.params.id
	try {
		const skill = await Skill.findByPk(id)
		if (!skill) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró la habilidad' })
		}

		return res.status(200).json({ data: skill })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al obtener la habilidad' })
	}
}

const create = async (req, res) => {
	const { name } = req.body

	try {
		const skill = await Skill.create({ name })
		return res.status(201).json({ data: skill, message: 'Habilidad creada' })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear la habilidad' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { name } = req.body
	try {
		const skill = await Skill.findByPk(id)

		if (!skill) {
			return res
				.status(400)
				.json({ data: {}, message: 'No se encontró la habilidad' })
		}

		await skill.update({
			name: name || skill.name,
		})

		return res.status(200).json({ data: id, message: 'Habilidad actualizada' })
	} catch (error) {
		res.status(500).json({ data: {}, message: 'Error al actualizar habilidad' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id
	try {
		const skill = await Skill.findByPk(id)

		if (!skill) {
			return res
				.status(404)
				.json({ data: {}, message: 'No se encontró la habilidad' })
		}

		await skill.destroy()

		return res.status(200).json({ data: {}, message: 'Habilidad eliminada' })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar la habilidad' })
	}
}

export { get, getById, create, edit, remove }
