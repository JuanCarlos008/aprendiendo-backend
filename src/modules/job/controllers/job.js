const getJobs = async (req, res) => {
	try {
		const jobs = await Job.findAll()
		res.json(jobs)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createJob = async (req, res) => {
	const job = new Job(req.body)
	try {
		await job.save()
		res.json(job)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateJob = async (req, res) => {
	const job = await Job.findById(req.params.id)
	try {
		job.fill(req.body)
		await job.save()
		res.json(job)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteJob = async (req, res) => {
	try {
		await Job.destroyById(req.params.id)
		res.json({ message: 'Empleado eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}
