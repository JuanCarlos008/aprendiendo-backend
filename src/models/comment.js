const Comment = sequelize.define('Comment', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	usuario_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'User',
			field: 'id',
		},
	},
	contenido: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	fecha_comentario: {
		type: Sequelize.DATETIME,
		allowNull: false,
	},
	leccion_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Lesson',
			field: 'id',
		},
	},
})

export default Comment
