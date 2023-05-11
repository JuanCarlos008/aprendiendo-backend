const getQuestion = async (req, res) => {
	try {
		const answer = await Question.findAll()
		res.json(answer)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createAnswer = async (req, res) => {
	const answer = new Question(req.body)
	try {
		await answer.save()
		res.json(answer)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateAnswer = async (req, res) => {
	const answer = await Question.findById(req.params.id)
	try {
		answer.fill(req.body)
		await answer.save()
		res.json(answer)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteAnswer = async (req, res) => {
	try {
		await Question.destroyById(req.params.id)
		res.json({ message: 'Respuesta eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getQuestion, createAnswer, updateAnswer, deleteAnswer }
