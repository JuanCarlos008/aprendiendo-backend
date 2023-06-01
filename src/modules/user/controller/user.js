// src/controllers/user.js
import bcrypt from 'bcrypt'
import User from '../../../models/user.js'

//listo
const get = async (req, res) => {
	try {
		const users = await User.findAll()

		if (users.length === 0) {
			return res
				.status(404)
				.json({ data: [], message: 'No se encontraron usuarios' })
		}

		return res.status(200).json({ data: users })
	} catch (err) {
		return res
			.status(500)
			.json({ data: [], message: 'Error al obtener usuarios' })
	}
}

//listo
const getById = async (req, res) => {
	const id = req.params.id
	try {
		const user = await User.findByPk(id)

		if (!user) {
			return res
				.status(404)
				.json({ data: {}, message: 'Usuario no encontrado' })
		}

		return res.status(200).json({ data: user })
	} catch (err) {
		console.log(err)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al obtener usuario' })
	}
}

const create = async (req, res) => {
	const { email, password, role } = req.body

	try {
		const existingUser = await User.findOne({ where: { email } })

		if (existingUser) {
			return res
				.status(409)
				.json({ data: {}, message: 'El correo electrónico ya está en uso' })
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const user = await User.create({
			email,
			password: hashedPassword,
			role,
		})

		return res.status(201).json({ data: user })
	} catch (err) {
		return res.status(500).json({ data: {}, message: 'Error al crear usuario' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { email, password, role } = req.body

	try {
		const user = await User.findByPk(id)

		if (!user) {
			return res
				.status(404)
				.json({ data: {}, message: 'Usuario no encontrado' })
		}

		const hashedPassword = password
			? await bcrypt.hash(password, 10)
			: user.password

		await user.update({
			email: email || user.email,
			password: hashedPassword,
			role: role || user.role,
		})

		return res.status(200).json({ data: user, message: 'Usuario actualizado' })
	} catch (err) {
		console.log(err)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al actualizar usuario' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id

	try {
		const user = await User.findByPk(id)

		if (!user) {
			return res
				.status(404)
				.json({ data: {}, message: 'Usuario no encontrado' })
		}

		await user.destroy()

		return res.status(204).json({ data: user })
	} catch (err) {
		console.error(err)
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar usuario' })
	}
}

export default { get, getById, create, edit, remove }
