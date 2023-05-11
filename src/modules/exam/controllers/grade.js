const getGrades = async (req, res) => {
	try {
		const grades = await Grade.findAll()
		res.json(grades)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createGrade = async (req, res) => {
	const grade = new Grade(req.body)
	try {
		await grade.save()
		res.json(grade)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateGrade = async (req, res) => {
	const grade = await Grade.findById(req.params.id)
	try {
		grade.fill(req.body)
		await grade.save()
		res.json(grade)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteGrade = async (req, res) => {
	try {
		await Grades.destroyById(req.params.id)
		res.json({ message: 'Calificación eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}
