const getJobCategories = async (req, res) => {
	try {
		const jobCategories = await JobCategory.findAll()
		res.json(jobCategories)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createJobCategory = async (req, res) => {
	const jobCategory = new JobCategory(req.body)
	try {
		await jobCategory.save()
		res.json(jobCategory)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateJobCategory = async (req, res) => {
	const jobCategory = await JobCategory.findById(req.params.id)
	try {
		jobCategory.fill(req.body)
		await jobCategory.save()
		res.json(jobCategory)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteJobCategory = async (req, res) => {
	try {
		await JobCategory.destroyById(req.params.id)
		res.json({ message: 'Categoria de empleo eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export {
	getJobCategories,
	createJobCategory,
	updateJobCategory,
	deleteJobCategory,
}
