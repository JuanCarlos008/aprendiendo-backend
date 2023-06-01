import InstitutionProfile from '../../../models/InstitutionProfile'

const get = async (req, res) => {
	try {
		const profiles = await InstitutionProfile.findAll()

		if (profiles.length === 0) {
			res.status(200).json({ message: 'No hay perfiles de instituciones' })
		}

		return res.status(200).json({ data: profiles })
	} catch (error) {
		return res.status(500).json({
			data: [],
			message: 'Error al obtener los perfiles de instituciones',
		})
	}
}

const getById = async (req, res) => {
	const id = req.params.id

	try {
		const profile = await InstitutionProfile.findByPk(id)

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
	const { name, about, website_url, image_url, user_id } = req.body

	try {
		const profile = await InstitutionProfile.create({
			name,
			about,
			image_url,
			user_id,
		})
		return res.status(201).json({ data: profile })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear el perfil de la institución' })
	}
}

const edit = async (req, res) => {
	const id = req.params.id
	const { name, about, website_url, image_url, user_id } = req.body

	try {
		const profile = await InstitutionProfile.findByPk(id)

		if (!profile) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe el perfil de la institución' })
		}

		await profile.update({
			name,
			about,
			image_url,
			user_id,
		})

		return res.status(200).json({ data: profile })
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: 'Error al editar el perfil de la institución',
		})
	}
}

const remove = async (req, res) => {
	const id = req.params.id

	try {
		const profile = await InstitutionProfile.findByPk(id)

		if (!profile) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe el perfil de la institución' })
		}

		await profile.destroy()

		return res.status(204).json({ data: profile })
	} catch (error) {
		return res.status(500).json({
			data: {},
			message: 'Error al eliminar el perfil de la institución',
		})
	}
}

export { get, getById, create, edit, remove }
