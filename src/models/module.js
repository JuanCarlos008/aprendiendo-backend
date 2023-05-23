const Module = sequelize.define(
	'Modulo',
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
		duration: {
			type: Sequelize.INTEGER,
		},
		order: {
			type: Sequelize.INTEGER,
		},
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Course',
				field: 'id',
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users',
	}
)

export default Module
