const getJobApplications = async (req, res) => {
	try {
		const jobApplications = await JobApplication.findAll()
		res.json(jobApplications)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createJobApplication = async (req, res) => {
	const jobApplication = new JobApplication(req.body)
	try {
		await jobApplication.save()
		res.json(jobApplication)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateJobApplication = async (req, res) => {
	const jobApplication = await JobApplication.findById(req.params.id)
	try {
		jobApplication.fill(req.body)
		await jobApplication.save()
		res.json(jobApplication)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteJobApplication = async (req, res) => {
	try {
		await JobApplication.destroyById(req.params.id)
		res.json({ message: 'Solicitud de empleo eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}
