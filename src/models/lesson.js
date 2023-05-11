const Lesson = sequelize.define('Lesson', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre_lesson: {
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
	tipo_contenido: {
		type: Sequelize.STRING,
	},
	url_video: {
		type: Sequelize.STRING,
	},
	modulo_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Module',
			field: 'id',
		},
	},
})
