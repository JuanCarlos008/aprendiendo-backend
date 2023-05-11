const Option = sequelize.define('Option', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	texto_option: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	correcta: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	pregunta_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'Quetion',
			field: 'id',
		},
	},
})
