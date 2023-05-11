const getLessons = async (req, res) => {
	try {
		const lessons = await Lesson.findAll()
		res.json(lessons)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createLesson = async (req, res) => {
	const lesson = new Lesson(req.body)
	try {
		await lesson.save()
		res.json(lesson)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateLesson = async (req, res) => {
	const lesson = await Lesson.findById(req.params.id)
	try {
		lesson.fill(req.body)
		await lesson.save()
		res.json(lesson)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteLesson = async (req, res) => {
	try {
		await Lesson.destroyById(req.params.id)
		res.json({ message: 'Leccion de empleo eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getLessons, createLesson, updateLesson, deleteLesson }
