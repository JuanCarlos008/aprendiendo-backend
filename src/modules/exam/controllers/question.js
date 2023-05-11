const getQuestions = async (req, res) => {
	try {
		const questions = await Question.findAll()
		res.json(questions)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createQuestion = async (req, res) => {
	const question = new Question(req.body)
	try {
		await question.save()
		res.json(question)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateQuestion = async (req, res) => {
	const question = await Questions.findById(req.params.id)
	try {
		question.fill(req.body)
		await question.save()
		res.json(question)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteQuestion = async (req, res) => {
	try {
		await Question.destroyById(req.params.id)
		res.json({ message: 'Pregunta de examen eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}
