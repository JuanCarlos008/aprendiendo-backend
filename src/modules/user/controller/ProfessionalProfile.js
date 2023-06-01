import ProfessionalProfile from '../../../models/ProfessionalProfile'

const get = async (req, res) => {
	try {
		const professionalProfile = await ProfessionalProfile.findAll()

		if (professionalProfile.length === 0) {
			return res
				.status(404)
				.json({ data: [], message: 'No existen perfiles profesionales' })
		}

		return res.status(200).json({ data: professionalProfile })
	} catch (error) {
		return res.status(500).json({
			data: [],
			message: 'Error al obtener los perfiles profesionales',
		})
	}
}

const getById = async (req, res) => {
	const id = req.params.id

	try {
		const profile = await ProfessionalProfile.findByPk(id)

		if (!profile) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe el perfil de la institución' })
		}

		return res.status(200).json({ data: profile })
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: 'Error al obtener el perfil de la institución',
		})
	}
}

const create = async (req, res) => {
	const {
		name,
		last_name,
		about,
		cv_url,
		porfolio_url,
		image_url,
		gender,
		user_id,
	} = req.body

	try {
		const profile = await ProfessionalProfile.create({
			name,
			last_name,
			about,
			cv_url,
			porfolio_url,
			image_url,
			gender,
			user_id,
		})
		return res.status(201).json({ data: profile, message: 'Perfil creado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear el perfil profesional' })
	}
}

const edit = async (req, res) => {
	const { name, last_name, about, cv_url, porfolio_url, image_url, gender } =
		req.body

	const id = req.params.id

	try {
		const profile = await ProfessionalProfile.findByPk(id)

		if (!profile) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe el perfil profesional' })
		}

		await profile.update({
			name: name || profile.name,
			last_name: last_name || profile.last_name,
			about: about || profile.about,
			cv_url: cv_url || profile.cv_url,
			porfolio_url: porfolio_url || profile.porfolio_url,
			image_url: image_url || profile.image_url,
			gender: gender || profile.gender,
		})

		return res
			.status(200)
			.json({ data: profile, message: 'Perfil profesional actualizado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al actualizar el perfil profesional' })
	}
}

const remove = async (req, res) => {
	const id = req.params.id

	try {
		const profile = await ProfessionalProfile.findByPk(id)

		if (!profile) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe el perfil profesional' })
		}

		await profile.destroy()

		return res
			.status(200)
			.json({ data: id, message: 'Perfil profesional eliminado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar el perfil profesional' })
	}
}

export { get, getById, create, edit, remove }
