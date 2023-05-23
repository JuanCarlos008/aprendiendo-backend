const get = async (req, res) => {
	try {
		const comment = await Comment.findAll()
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const getByID = async (req, res) => {
	try {
		const comment = await Comment.findOne({
			where: { id: req.params.id },
		})
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const create = async (req, res) => {
	const comment = new Comment(req.body)
	try {
		await comment.save()
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const update = async (req, res) => {
	const comment = await Comment.findOne({
		where: { id: req.params.id },
	})
	try {
		comment.fill(req.body)
		await comment.save()
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteC = async (req, res) => {
	try {
		await Comment.destroyById(req.params.id)
		res.json({ message: 'Comentario eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { get, getByID, create, update, deleteC }
