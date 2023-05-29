import InstitutionProfile from '../../../models/InstitutionProfile'

const getInstitutionProfile = async (req, res) => {
	try {
		const institutionProfile = await InstitutionProfile.findAll()
		res.json(institutionProfile)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createInstitutionProfile = async (req, res) => {
	const institutionProfile = new InstitutionProfile(req.body)
	try {
		await institutionProfile.save()
		res.json(institutionProfile)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateInstitutionProfile = async (req, res) => {
	const institutionProfile = await InstitutionProfile.findById(req.params.id)
	try {
		institutionProfile.fill(req.body)
		await institutionProfile.save()
		res.json(institutionProfile)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteInstitutionProfile = async (req, res) => {
	try {
		await InstitutionProfile.destroyById(req.params.id)
		res.json({ message: 'Perfil profesional eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export {
	getInstitutionProfile,
	createInstitutionProfile,
	updateInstitutionProfile,
	deleteInstitutionProfile,
}
