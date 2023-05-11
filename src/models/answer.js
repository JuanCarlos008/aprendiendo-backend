const Answer = sequelize.define('Answer', {
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
	pregunta_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Question',
			field: 'id',
		},
	},
	opcion_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Option',
			field: 'id',
		},
	},
	fecha_respondida: {
		type: Sequelize.DATETIME,
	},
	calificacion: {
		type: Sequelize.DECIMAL(10, 2),
		allowNull: false,
	},
})
