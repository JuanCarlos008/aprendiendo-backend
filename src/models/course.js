const Course = sequelize.define(
	'Course',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre_curso: {
			type: Sequelize.STRING,
		},
		descripcion: {
			type: Sequelize.TEXT,
		},
		costo: {
			type: Sequelize.DECIMAL(10, 2),
		},
		nivel_dificultad: {
			type: Sequelize.STRING,
		},
		duracion: {
			type: Sequelize.INTEGER,
		},
		fecha_inicio: {
			type: Sequelize.DATETIME,
		},
		fecha_finalizacion: {
			type: Sequelize.DATETIME,
		},

		categoria_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'CursoCategorias',
				field: 'id',
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
)
