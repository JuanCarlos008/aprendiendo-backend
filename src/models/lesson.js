const Lesson = sequelize.define(
	'Lesson',
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
		content_type: {
			type: Sequelize.STRING,
		},
		url_video: {
			type: Sequelize.STRING,
		},
		module_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Module',
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

export default Lesson
