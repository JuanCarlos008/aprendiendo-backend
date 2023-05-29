import ProfessionalProfile from '../../../models/ProfessionalProfile'

const getProfessionalProfile = async (req, res) => {
	try {
		const professionalProfile = await ProfessionalProfile.findAll()
		res.json(professionalProfile)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createProfessionalProfile = async (req, res) => {
	const professionalProfile = new ProfessionalProfile(req.body)
	try {
		await professionalProfile.save()
		res.json(professionalProfile)
	} catch (error) {
		res.status(500).send(error)
	}
}

const updateProfessionalProfile = async (req, res) => {
	const professionalProfile = await ProfessionalProfile.findById(req.params.id)
	try {
		professionalProfile.fill(req.body)
		await professionalProfile.save()
		res.json(professionalProfile)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteProfessionalProfile = async (req, res) => {
	try {
		await ProfessionalProfile.destroyById(req.params.id)
		res.json({ message: 'Perfil profesional eliminado' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export {
	getProfessionalProfile,
	createProfessionalProfile,
	updateProfessionalProfile,
	deleteProfessionalProfile,
}
