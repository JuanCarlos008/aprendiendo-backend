import UserType from '../../../models/userType.js'

//listo
const get = async (req, res) => {
	try {
		const userType = await UserType.findAll()

		if (userType.length === 0) {
			return res
				.status(404)
				.json({ data: [], message: 'No existen tipos de usuario' })
		}

		return res.status(200).json({ data: userType })
	} catch (error) {
		return res
			.status(500)
			.json({ data: [], message: 'Error al obtener los tipos de usuario' })
	}
}

//listo
const getById = async (req, res) => {
	const id = req.params.id

	try {
		const userType = await UserType.findByPk(id)

		if (!userType) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe el tipo de usuario' })
		}

		return res.status(200).json({ data: userType })
	} catch (error) {
		console.log(error)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al obtener el tipo de usuario' })
	}
}

const create = async (req, res) => {
	const { name } = req.body

	try {
		const userType = await UserType.create({ type })
		return res.status(201).json({ data: userType })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear el tipo de usuario' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { type } = req.body

	try {
		const userType = await UserType.findByPk(id)

		if (!userType) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe el tipo de usuario' })
		}

		await userType.update({ type })

		return res.status(200).json({ data: userType })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al actualizar el tipo de usuario' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id

	try {
		const userType = await UserType.findByPk(id)

		if (!userType) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe el tipo de usuario' })
		}

		await userType.destroy()

		return res.status(200).json({ data: id })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar el tipo de usuario' })
	}
}

export default {
	get,
	getById,
	create,
	edit,
	remove,
}
