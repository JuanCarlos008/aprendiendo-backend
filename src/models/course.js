const Course = sequelize.define(
	'Course',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.TEXT,
		},
		cost: {
			type: Sequelize.DECIMAL(10, 2),
		},
		duration: {
			type: Sequelize.INTEGER,
		},
		start_date: {
			type: Sequelize.DATETIME,
		},
		finish_date: {
			type: Sequelize.DATETIME,
		},

		category_id: {
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

export default Course
