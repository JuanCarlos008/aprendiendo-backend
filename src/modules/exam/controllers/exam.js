const getExams = async (req, res) => {
	try {
		const exam = await Exam.findAll()
		res.json(exam)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createExam = async (req, res) => {
	const exam = new Exam(req.body)
	try {
		await exam.save()
		res.json(exam)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateExam = async (req, res) => {
	const exam = await Exam.findById(req.params.id)
	try {
		exam.fill(req.body)
		await exam.save()
		res.json(exam)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteExam = async (req, res) => {
	try {
		await Exam.destroyById(req.params.id)
		res.json({ message: 'Examen eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getExams, createExam, updateExam, deleteExam }
