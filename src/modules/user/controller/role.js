const Roles = require('./models/roles')

const getRoles = async (req, res) => {
	try {
		const roles = await Role.findAll()
		res.json(roles)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createRol = async (req, res) => {
	const rol = new Role(req.body)
	try {
		await rol.save()
		res.json(rol)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateRol = async (req, res) => {
	const rol = await Role.findById(req.params.id)
	try {
		rol.fill(req.body)
		await rol.save()
		res.json(rol)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteRol = async (req, res) => {
	try {
		await Role.destroyById(req.params.id)
		res.json({ message: 'Role eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}
