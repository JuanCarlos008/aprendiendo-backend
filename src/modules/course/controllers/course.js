import Course from '../../../models/course'

const get = async (req, res) => {
	try {
		const courses = await Course.findAll()
		res.json(courses)
	} catch (error) {
		res.status(500).send(error)
	}
}

const getByID = async (req, res) => {
	try {
		const course = await Course.findOne({
			where: { id: req.params.id },
		})
		res.json(course)
	} catch (error) {
		res.status(500).send(error)
	}
}

const create = async (req, res) => {
	const course = new Course(req.body)
	try {
		await course.save()
		res.json(course)
	} catch (error) {
		res.status(500).send(error)
	}
}

const update = async (req, res) => {
	const course = await Course.findOne({
		where: { id: req.params.id },
	})
	try {
		course.fill(req.body)
		await course.save()
		res.json(course)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteC = async (req, res) => {
	try {
		await Course.destroyById(req.params.id)
		res.json({ message: 'Curso eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { get, getByID, create, update, deleteC }
