const Job = sequelize.define('Job', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre_trabajo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	descripcion: {
		type: Sequelize.TEXT,
	},
	empresa: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	ubicacion: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	salario: {
		type: Sequelize.DECIMAL(10, 2),
		allowNull: false,
	},
	categoria_id: {
		type: Sequelize.INTEGER,
		references: {
			model: 'JobCategory',
			field: 'id',
		},
	},
	requisitos_minimos: {
		type: Sequelize.TEXT,
	},
	fecha_publicacion: {
		type: Sequelize.DATETIME,
		allowNull: false,
	},
})
