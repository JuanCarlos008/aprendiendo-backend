const getCourseCategories = async (req, res) => {
	try {
		const courseCategories = await CourseCategory.findAll()
		res.json(courseCategories)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createCourseCategory = async (req, res) => {
	const courseCategory = new CourseCategory(req.body)
	try {
		await courseCategory.save()
		res.json(courseCategory)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateCourseCategory = async (req, res) => {
	const courseCategory = await CourseCategory.findById(req.params.id)
	try {
		courseCategory.fill(req.body)
		await courseCategory.save()
		res.json(courseCategory)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteCourseCategory = async (req, res) => {
	try {
		await CourseCategories.destroyById(req.params.id)
		res.json({ message: 'Curso categoria eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export {
	getCourseCategories,
	createCourseCategory,
	updateCourseCategory,
	deleteCourseCategory,
}
