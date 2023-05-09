// src/middleware/auth.js
const checkAdminRole = (req, res, next) => {
	const user = req.user
	if (user.role !== 'admin') {
		return res
			.status(401)
			.json({ message: 'No tienes permisos de administrador' })
	}
	next()
}

const checkEmployerRole = (req, res, next) => {
	const user = req.user
	if (user.role !== 'employer') {
		return res.status(401).json({ message: 'No tienes permisos de empleador' })
	}
	next()
}

const checkProfessionalRole = (req, res, next) => {
	const user = req.user
	if (user.role !== 'professional') {
		return res
			.status(401)
			.json({ message: 'No... tienes permisos de profesional' })
	}
	next()
}

export { checkAdminRole, checkEmployerRole, checkProfessionalRole }
