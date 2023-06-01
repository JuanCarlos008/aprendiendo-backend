import Comment from '../../../models/comment'

const get = async (req, res) => {
	try {
		const comments = await Comment.findAll()

		if (comments.length === 0) {
			return res
				.status(404)
				.json({ data: [], message: 'No existen comentarios' })
		}

		return res
			.status(200)
			.json({ data: comments, message: 'Comentarios obtenidos' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al obtener los comentarios' })
	}
}

const getById = async (req, res) => {
	const id = req.params.id

	try {
		const comment = await Comment.findByPk(id)

		if (!comment) {
			return res
				.status(404)
				.json({ data: {}, message: 'No existe el comentario' })
		}

		return res
			.status(200)
			.json({ data: comment, message: 'Comentario obtenido' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al obtener el comentario' })
	}
}

const create = async (req, res) => {
	const { comment_content, user_id, course_id } = req.body

	try {
		const comment = await Comment.create({
			comment_content,
			user_id,
			course_id,
		})
		return res.status(201).json({ data: comment, message: 'Comentario creado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al crear el comentario' })
	}
}

const edit = async (req, res) => {
	const commentId = req.params.id
	const { comment_content, user_id, course_id } = req.body

	try {
		const comment = await Comment.findByPk(commentId)

		if (!comment) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe el comentario' })
		}

		await comment.update({
			comment_content,
			user_id,
			course_id,
		})

		return res
			.status(200)
			.json({ data: comment, message: 'Comentario editado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al editar el comentario' })
	}
}

const remove = async (req, res) => {
	const commentId = req.params.id

	try {
		const comment = await Comment.findByPk(commentId)

		if (!comment) {
			return res
				.status(400)
				.json({ data: {}, message: 'No existe el comentario' })
		}

		await comment.destroy()

		return res
			.status(200)
			.json({ data: commentId, message: 'Comentario eliminado' })
	} catch (error) {
		return res
			.status(500)
			.json({ data: {}, message: 'Error al eliminar el comentario' })
	}
}

export { get, getById, create, edit, remove }
