const getComments = async (req, res) => {
	try {
		const comment = await Comment.findAll()
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createComment = async (req, res) => {
	const comment = new Comment(req.body)
	try {
		await comment.save()
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateComment = async (req, res) => {
	const comment = await Comment.findById(req.params.id)
	try {
		comment.fill(req.body)
		await comment.save()
		res.json(comment)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteComment = async (req, res) => {
	try {
		await Comment.destroyById(req.params.id)
		res.json({ message: 'Comentario eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}
