const Module = sequelize.define('Modulo', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre_modulo: {
		type: Sequelize.STRING,
	},
	descripcion: {
		type: Sequelize.TEXT,
	},
	duracion: {
		type: Sequelize.INTEGER,
	},
	orden: {
		type: Sequelize.INTEGER,
	},
	curso_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Course',
			field: 'id',
		},
	},
})

export default Module
