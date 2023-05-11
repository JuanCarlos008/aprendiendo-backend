const JobCategory = sequelize.define('JobCategory', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre_categoria: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})
