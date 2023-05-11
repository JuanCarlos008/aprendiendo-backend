const Exam = sequelize.define('Exam', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre_examen: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	descripcion: {
		type: Sequelize.TEXT,
	},
	duracion: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	curso_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Course',
			field: 'id',
		},
	},
})
