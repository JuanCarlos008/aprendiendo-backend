const Grade = sequelize.define('Grade', {
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
	examen_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Exam',
			field: 'id',
		},
	},
	curso_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Course',
			field: 'id',
		},
	},
	calificacion: {
		type: Sequelize.DECIMAL(10, 2),
		allowNull: false,
	},
})
