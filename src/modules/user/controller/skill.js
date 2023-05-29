import Skill from '../../../models/skill'

const getSkill = async (req, res) => {
	try {
		const skill = await Skill.findAll()
		res.json(skill)
	} catch (error) {
		res.status(500).send(error)
	}
}

const createSkill = async (req, res) => {
	const { name } = req.body
	try {
		await Skill.create({ name })
		res.json({ message: 'Skill created' })
	} catch (error) {
		res.status(500).send(error)
	}
}

const updatedSkill = async (req, res) => {
	const skill = await Skill.findByPk(req.params.id)
	try {
		skill.fill(req.body)
		await skill.save()
		res.json(skill)
	} catch (error) {
		res.status(500).send(error)
	}
}

const deleteSkill = async (req, res) => {
	try {
		await Skill.destroy({ where: { id: req.params.id } })
		res.json({ message: 'Skill deleted' })
	} catch (error) {
		res.status(500).send(error)
	}
}

export { getSkill, createSkill, updatedSkill, deleteSkill }
