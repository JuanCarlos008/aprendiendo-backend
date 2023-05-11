const getEnrolls = async (req, res) => {
	try {
		const enrolls = await Enrolls.findAll()
		res.json(enrolls)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createEnroll = async (req, res) => {
	const enroll = new Enroll(req.body)
	try {
		await enroll.save()
		res.json(enroll)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateEnroll = async (req, res) => {
	const enroll = await Enroll.findById(req.params.id)
	try {
		enroll.fill(req.body)
		await enroll.save()
		res.json(enroll)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteEnroll = async (req, res) => {
	try {
		await Enroll.destroyById(req.params.id)
		res.json({ message: 'Enroll eliminada' })
	} catch (error) {
		res.status(500).send(error)
	}
}
