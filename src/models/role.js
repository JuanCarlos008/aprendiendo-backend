const Role = sequelize.define('Role', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre_tipo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})

export default Role
