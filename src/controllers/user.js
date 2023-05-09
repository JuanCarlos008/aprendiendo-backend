// src/controllers/user.js
import bcrypt from 'bcrypt'
import User from '../models/user.js'

const createUser = async (req, res) => {
	const { name, email, password, role } = req.body

	try {
		const hashedPassword = await bcrypt.hash(password, 10)

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			role,
		})

		return res.status(201).json({ user })
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: 'Error al crear usuario' })
	}
}

const updateUser = async (req, res) => {
	const userId = req.params.id
	const { name, email, password, role } = req.body

	try {
		const user = await User.findOne({ where: { id: userId } })

		if (!user) {
			return res.status(404).json({ message: 'Usuario no encontrado' })
		}

		const hashedPassword = password
			? await bcrypt.hash(password, 10)
			: user.password

		await user.update({
			name: name || user.name,
			email: email || user.email,
			password: hashedPassword,
			role: role || user.role,
		})

		return res.status(200).json({ user })
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: 'Error al actualizar usuario' })
	}
}

const deleteUser = async (req, res) => {
	const userId = req.params.id

	try {
		const user = await User.findOne({ where: { id: userId } })

		if (!user) {
			return res.status(404).json({ message: 'Usuario no encontrado' })
		}

		await user.destroy()

		return res.status(204).json()
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: 'Error al eliminar usuario' })
	}
}

const getUsers = async (req, res) => {
	try {
		const users = await User.findAll()

		return res.status(200).json({ users })
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: 'Error al obtener usuarios' })
	}
}

export default { createUser, updateUser, deleteUser, getUsers }
