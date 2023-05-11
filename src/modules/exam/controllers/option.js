const Options = require('./models/options')

const getOptions = async (req, res) => {
	try {
		const options = await Option.findAll()
		res.json(options)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createOption = async (req, res) => {
	const option = new Option(req.body)
	try {
		await option.save()
		res.json(option)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateOption = async (req, res) => {
	const option = await Option.findById(req.params.id)
	try {
		option.fill(req.body)
		await option.save()
		res.json(option)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteOption = async (req, res) => {
	try {
		await Option.destroyById(req.params.id)
		res.json({ message: 'Opcion de pregunta eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getOptions, createOption, updateOption, deleteOption }
