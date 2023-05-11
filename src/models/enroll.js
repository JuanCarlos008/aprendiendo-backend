const Enroll = sequelize.define('Enroll', {
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
	curso_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Course',
			field: 'id',
		},
	},
	fecha_inscripcion: {
		type: Sequelize.DATETIME,
	},
	estado_inscripcion: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'pendiente',
	},
})
