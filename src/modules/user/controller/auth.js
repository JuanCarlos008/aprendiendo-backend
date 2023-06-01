// src/controllers/auth.js
import bcrypt from 'bcrypt'
import {
	createSessionToken,
	createAccessToken,
} from '../../../helpers/token.js'
import User from '../../../models/user.js'

const login = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ where: { email } })

		if (!user) {
			return res.status(401).json({ message: 'Credenciales inválidas' })
		}

		const isValidPassword = await bcrypt.compare(password, user.password)

		if (!isValidPassword) {
			return res.status(401).json({ message: 'Credenciales inválidas' })
		}

		const sessionToken = createSessionToken(user)
		const accessToken = createAccessToken(user)

		return res.status(200).json({ sessionToken, accessToken })
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: 'Error al iniciar sesión' })
	}
}

const validatePassword = async (req, res) => {
	const userId = req.params.id
	const { password } = req.body

	try {
		const user = await User.findByPk(userId)

		if (!user) {
			return res.status(404).json({ message: 'Usuario no encontrado' })
		}

		const isValidPassword = await bcrypt.compare(password, user.password)

		return res.status(200).json({ match: isValidPassword })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Error al validar contraseña' })
	}
}

export default {
	login,
	validatePassword,
}
