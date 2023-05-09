// src/helpers/token.js
import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export const createSessionToken = (user) => {
	const token = jwt.sign(
		{
			user: {
				id: user.id,
				email: user.email,
				role: user.role,
			},
		},
		config.secret,
		{ expiresIn: config.expiresIn }
	)
	return token
}

export const createAccessToken = (user) => {
	const token = jwt.sign(
		{
			user: {
				id: user.id,
				email: user.email,
				role: user.role,
			},
		},
		config.secret,
		{ expiresIn: '15m' }
	)
	return token
}
