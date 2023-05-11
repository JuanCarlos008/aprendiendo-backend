const getCourses = async (req, res) => {
	try {
		const courses = await Course.findAll()
		res.json(courses)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createCourse = async (req, res) => {
	const course = new Course(req.body)
	try {
		await course.save()
		res.json(course)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateCourse = async (req, res) => {
	const course = await Course.findById(req.params.id)
	try {
		course.fill(req.body)
		await course.save()
		res.json(course)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteCourse = async (req, res) => {
	try {
		await Course.destroyById(req.params.id)
		res.json({ message: 'Curso eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getCourses, createCourse, updateCourse, deleteCourse }
