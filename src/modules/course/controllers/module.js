const getModules = async (req, res) => {
	try {
		const modules = await Module.findAll()
		res.json(modules)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createModule = async (req, res) => {
	const module = new Module(req.body)
	try {
		await module.save()
		res.json(module)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateModule = async (req, res) => {
	const module = await Module.findById(req.params.id)
	try {
		module.fill(req.body)
		await module.save()
		res.json(module)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteModule = async (req, res) => {
	try {
		await Module.destroyById(req.params.id)
		res.json({ message: 'Modulo de curso eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getModules, createModule, updateModule, deleteModule }
