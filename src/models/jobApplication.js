const JobApplication = sequelize.define('JobApplication', {
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
	trabajo_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Job',
			field: 'id',
		},
	},
	fecha_solicitud: {
		type: Sequelize.DATETIME,
		allowNull: false,
	},
	estado_solicitud: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'pendiente',
	},
})

export default JobApplication
