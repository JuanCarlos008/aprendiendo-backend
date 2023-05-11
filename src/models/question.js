const Question = sequelize.define('Question', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	enunciado: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	examen_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Exam',
			field: 'id',
		},
	},
})
